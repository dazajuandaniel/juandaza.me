# Metaflow Tutorials

## What and Why?

**Basics:** 

Code is organized as a DAG.

**Versioning:** 

Out of the box data and execution versioning. It does so by assigning an ID to each execution (every `run` command)

## CLI Utilities

```sh
python xxx.py show
```
Shows the DAG and the documentation on the code.

To run the flow
```sh
python xxx.py run
```
The command above first validates your flow and runs pylint to verify that the code is executable. If it's not executable, then it doesn't even start in the first place. At the end of the process it runs the code.

```sh
python xxx.py run 
```
Same as above but runs with defined parameters in the code. For example a function would be defined as

```python
Class myFlow():
    """
    Some doco here
    """
    # Code here

    genre = Parameter('param_name',
                    help="Some Documentation Here",
                    default='default_value')
    # Code here
```
The above is an example of a parameter definition.

```python
metaflow status
```
Shows the flows that are available.

```python
python xxx.py run --help
```
Shows the relevant metadata for the specific python file. For example, if there are parameters, then this would show the parameter definition and documentation.

```python
python xxx.py dump <run-id>
```
Allows to inspect elements in each run-id. This is more useful from a Notebook

```python
python xxx.py dump --tag <>
```
Allows to tag a particular run

## Other Characteristics

### Persisiting States
Metaflow automatically persists the states and data in the internal store, removing the decision from the developer. There is no longer a need to store the data in a DB.

Metadata can be local storage or S3.

Data is generally not duplicated. If it doesn't change, it is not duplicated.

```python
from metaflow import FlowSpec, step

Class HelloFlow(FlowSpec):

    @step
    def start(self):
        self.x = 1
        self.next(self.end)
    
    @step
    def end(self):
        self.x += 1
        print("x is",self.x)

if __name__ == '__main__':
    HelloFlow()
```
Even if the steps are executed in separated processess Metaflow automatically persists in the datastore as immutable artifacts. You can then inspect the values using code.

```python
python xxx.py dump <run-id>
```
This gives the data.

### Resuming the code from failure

Let's assume there is an error in one of the steps. For example there is a step that does a 0 division.

```python
from metaflow import FlowSpec, Parameter, step

class ParameterFlow(FlowSpec):
    alpha = Parameter('alpha',
                      help='Learning rate',
                      default=0.01)

    @step
    def start(self):
        print('alpha is %f' % self.alpha)
        self.next(self.end)

    @step
    def end(self):
        print('alpha is still %f' % (self.alpha / 0))

if __name__ == '__main__':
    ParameterFlow()
```
The code above will throw an error, you can fix the error and the run

```python
python xxx.py resume
```

This clones the results from the previous run and then continues to run.

### [Failure Handling](https://docs.metaflow.org/metaflow/failures)

Decorators in each step will determine what the failure policy is.

**retry decorator**

By default it attempts to retry 3 times. Metaflow manages retries so that only artifacts from the last retry are visible - this means that there are no duplicate artifacts.

```python
from metaflow import FlowSpec, step, retry

class RetryFlow(FlowSpec):

    @retry
    @step
    def start(self):
        import time
        if int(time.time()) % 2 == 0:
            raise Exception("Bad luck!")
        else:
            print("Lucky you!")
        self.next(self.end)

    @step
    def end(self):
        print("Phew!")

if __name__ == '__main__':
    RetryFlow()
```

**catch decorator**

Catches any exceptions that occur during the step and then continues execution of subsequent steps. Note that the code has to be able to be modified so that it can tolerate faulty steps. This might be useful for hyperparameter search where one failure might not matter.

```python
from metaflow import FlowSpec, catch, step

class CatchFlow(FlowSpec):

    @step
    def start(self):
        self.params = range(3)
        self.next(self.compute, foreach='params')

    @catch(var='compute_failed')
    @step
    def compute(self):
        self.div = self.input
        self.x = 5 / self.div
        self.next(self.join)

    @step
    def join(self, inputs):
        for input in inputs:
            if input.compute_failed:
                print('compute failed for parameter: %d' % input.div)
        self.next(self.end)

    @step
    def end(self):
        pass

if __name__ == '__main__':
    CatchFlow()
```

**timeout decorator**

Pretty self-explanatory - avoids the code getting stuck

```python
from metaflow import FlowSpec, timeout, step
import time

class TimeoutFlow(FlowSpec):

    @timeout(seconds=5)
    @step
    def start(self):
        for i in range(100):
            print(i)
            time.sleep(1)
        self.next(self.end)

    @step
    def end(self):
        pass

if __name__ == '__main__':
    TimeoutFlow()
```

### Dependency Management

Integrates out of the box with conda manager.

```python
from metaflow import FlowSpec, step, conda

Class CondaExample(FlowSpec):

    @step
    def start(self):
        print("Hola")
        self.next(self.end)
    
    @conda(libraries = {'python-levenshtein':'0.12.0'})
    @step
    def end(self):
        import levenshtein
        print('distance',Levenshtein.distance('foo','moo'))
if __name__ == "__main__"
    CondaExample()
```
