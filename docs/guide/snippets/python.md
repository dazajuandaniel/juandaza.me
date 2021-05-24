# Python Snippets

### Jupyter Magics
Handy Jupyter lines of code to speed up development.

```python
# Matplotlib inline rendering
%matplotlib inline

# Allow plotly to operate within the notebook
init_notebook_mode()

# General pandas settings to:
pd.options.mode.chained_assignment = None
pd.set_option('display.max_columns', 500)

# Extension Reloads
%load_ext autoreload
%autoreload 2

# Remove warnings
import warnings
warnings.filterwarnings('ignore')
```

### Code Helpers
Flatten a list of lists `l`
```python
flat_list = [item for sublist in l for item in sublist]
```

Dict Comprehension
```python
{ (some_key if condition else default_key) : 
  (something_if_true if condition else something_if_false) 
  for key, value in dict_.items() }
```


Replacing nested loops with itertools product

Instead of doing
```python
for a in list_a:
    for b in list_b:
        for c in list_c:
            for d in list_d:
                #Do stuff
```
do
```python
for (a,b,c,d) in product(list_a,list_b,list_c,list_d):
    #Do stuff
```

