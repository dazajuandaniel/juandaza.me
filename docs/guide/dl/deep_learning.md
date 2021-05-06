# Deep Learning (ANN)
[[toc]]
## ANN General Concepts

### Multilayer Perceptron & Backpropagation

**MLP**

MLP -> composed of one input layer, one or more TLU (hidden layers), and one final TLU (output layer).

**Backpropagation**

* Handles one mini-batch at a time, goes through the full training set multiple times (called *epoch*)
* Computes the *forward pass* -> Computes the output of all neurons in the first layer, then it passes the result to the next layer and so on. Like making predictions but results are preserved
* Calculates the network's output error
* Then, it computes how much each output connection contributed to the error
* Measures how much of these error contributions came from each connection in the layer below, working backwards.
* Finally, it does Gradient Descent.

**Regression MLP**

Use single output neuron or an output neuron per dimension.
* Guarantee Output is > 0 -> ReLU Activation function or SoftPlus
* Guarantee output is in range (a,b) -> Logistic or Hyperbolic tangent and scale.

*Typical Regression MLP*
| Hyperparameter | Typical Value |
| :-: | :-: |
| # input neurons | One per input feature Value |
| # hidden layers | 1-5 |
| # neurons per hidden layer | 10-100 |
| # output neurons | 1 per dimension |
| Hidden activation | ReLU/SELU |
| Output activation | None, ReLU/SoftPlus/Logistic/tanh |
| Loss function | MSE or MAE/Huber (if outliers) |

**Classification MLP**

* Binary -> Single output Neuron using logistic 
* Multilabel Binary -> One output neuron per positive label
* Multiclass -> One output Neuron per class

*Typical Classification MLP*
| Hyperparameter | Binary | Multilabel | Multiclass
| :-: | :-: | :-: | :-: |
| # input neurons | One per input feature Value |One per input feature Value |One per input feature Value |
| # hidden layers | 1-5 |1-5 |1-5 |
| # neurons per hidden layer | 10-100 |10-100 |10-100 |
| # output neurons | 1 | 1 per label | 1 per class |
| Output activation | Logistic |Logistic |SoftMax |
| Loss function | Cross entropy |Cross entropy |Cross entropy |

::: tip In Keras

sparse_categorical_crossentropy -> Sparse labels

categorical_crossentropy -> One target probability per class

sigmoid (logistic) -> Binary classification

:::

**Other Topologies/Architectures**
* [*Wide & Deep*](https://arxiv.org/abs/1606.07792) -> Non sequential neural network

## Important Concepts

**Vanishing Gradient Problem**

Gradients often get smaller and smaller as the algorithm progresses down to the lower layers. As a result, the Gradient Descent update leaves the lower layers’ connection weights virtually unchanged, and training never converges to a good solution.

A solution is `Glorot Initialization` or `He Initialization`.

```python
    [...]
    keras.layers.Dense(10, kernel_initializer="he_normal"),
    keras.layers.LeakyReLU(alpha=0.2),
    [...]
```

**Batch Normalization**

Consists of adding an operation in the model just before or after the activation function of each hidden layer. This operation simply zero-centers and normalizes each input, then scales and shifts the result using two new parameter vectors per layer: one for scaling, the other for shifting.

```python
keras.layers.BatchNormalization()
```

**Regularization**

**L1 L2**

`L1 & L2` to constrain a neural network’s connection weights or get a sparse model.

```python
layer = keras.layers.Dense(100, activation="elu",
                           kernel_initializer="he_normal",
                           kernel_regularizer=keras.regularizers.l2(0.01))
```

[**Dropout**](https://jmlr.org/papers/v15/srivastava14a.html)

At every training step, every neuron (including the input neurons, but always excluding the output neurons) has a probability p of being temporarily `dropped out`, meaning it will be entirely ignored during this training step, but it may be active during the next step.

```python
    ...
    keras.layers.Dropout(rate=0.2),
    ...
```
