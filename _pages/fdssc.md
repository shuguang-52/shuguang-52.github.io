---
title: "Shuguang Dou - FDSSC"
layout: gridlay
excerpt: "Shuguang Dou: FDSSC"
sitemap: false
permalink: /fdssc/
---

[comment]: Title
<h2 align="center"> A Fast Dense Spectral–Spatial Convolution Network Framework for Hyperspectral Images Classification </h2>
<p>&nbsp;</p>

[comment]: Authors
<p style="text-align: center;">
<a href="http://varunjampani.github.io" style="color: #CC0000">Wenju Wang </a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="http://research.nvidia.com/person/deqing-sun" style="color: #CC0000"> Shuguang Dou *</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="http://mingyuliu.net/" style="color: #CC0000">Zhongmin Jiang</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="http://faculty.ucmerced.edu/mhyang/" style="color: #CC0000">Liujie Sun </a>
</p>
<p>&nbsp;</p>

[comment]: Abstract
<h3> Abstract </h3>Recent research shows that deep-learning-derived methods based on a deep convolutional neural network have high accuracy when applied to hyperspectral image (HSI) classification, but long training times. To reduce the training time and improve accuracy, in this paper we propose an end-to-end fast dense spectral–spatial convolution (FDSSC) framework for HSI classification. The FDSSC framework uses different convolutional kernel sizes to extract spectral and spatial features separately, and the “valid” convolution method to reduce the high dimensions. Densely-connected structures—the input of each convolution consisting of the output of all previous convolution layers—was used for deep learning of features, leading to extremely accurate classification. To increase speed and prevent overfitting, the FDSSC framework uses a dynamic learning rate, parametric rectified linear units, batch normalization, and dropout layers. These attributes enable the FDSSC framework to achieve accuracy within as few as 80 epochs. The experimental results show that with the Indian Pines, Kennedy Space Center, and University of Pavia datasets, the proposed FDSSC framework achieved state-of-the-art performance compared with existing deep-learning-based methods while significantly reducing the training time.

<center>
<figure>
		<div id="projectid">
    <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/fdssc_18_remote_sensing.png" width="900px" />
		</div>

<figcaption>
<br>
The fast dense spectral–spatial convolution (FDSSC) network for hyperspectral image (HSI) classification of labeled pixels with a 9 * 9 * L input. L is the number of bands of HSI. C is the number of categories to be classified.
</figcaption>
</figure>
</center>

<center>
<figure>
		<div id="projectid">
    <img src="{{ site.url }}{{ site.baseurl }}/images/projectpic/18_fdssc_framework.png" width="900px" />
		</div>

<figcaption>
<br>
FDSSC Framework for HSI classification of labeled pixels. Because of the densely-connected method, the FDSSC network has a deeper structure resulting in extremely efficient performance. Finally, the convergence rate of the model is very fast because of the BN and PReLU applied tothe FDSSC network and dynamic learning rate, and early stopping. Therefore, the training time of the proposed framework is shorter, and although the FDSSC model has a high quantity of parameters, it lacks overfitting on account of the dropout layer in the FDSSC network, early stopping, and cross-validation.
</figcaption>
</figure>
</center>

[comment]: Paper
<h3> Paper </h3>

- Paper: <a href="{{ site.url }}{{ site.baseurl }}/papers/18remotesensing_fdssc.pdf" style="color: #CC0000"> PDF </a>

Please consider citing if this work and/or the corresponding code are useful for you:

```
@inproceedings{shuguang:fdssc:2018,
	title = {A Fast Dense Spectral-Spatial Convolution Network Framework for Hyperspectral Images Classification},
	author = {Wang, Wenju; Dou, Shuguang; Jiang, Zhongmin; Sun, Liujie.},
	journal = {Remote Sensing},
	volume={10}
        issue={7}
	year = {2018}
        article number={1068}
}
```

[comment]: Code
<h3> Code </h3>
We use keras to implement fast dense spectral-spatial network framework. Code is available online in ths github repository:
<a href="https://github.com/shuguang-52/FDSSC" style="color: #CC0000">https://github.com/shuguang-52/FDSSC</a>.
