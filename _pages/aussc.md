---
title: "Shuguang Dou - AUSSC"
layout: gridlay
excerpt: "Shuguang Dou: AUSSC"
sitemap: false
permalink: /aussc/
---

[comment]: Title
<h2 align="center"> Alternately Updated Spectral–Spatial Convolution Network for the Classification of Hyperspectral Images </h2>
<p>&nbsp;</p>

[comment]: Authors
<p style="text-align: center;">
<a href="http://varunjampani.github.io" style="color: #CC0000">Wenju Wang </a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="http://research.nvidia.com/person/deqing-sun" style="color: #CC0000"> Shuguang Dou *</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="http://mingyuliu.net/" style="color: #CC0000">Sen Wang</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>
<p>&nbsp;</p>

[comment]: Abstract
<h3> Abstract </h3>The connection structure in the convolutional layers of most deep learning-based algorithms used for the classification of hyperspectral images (HSIs) has typically been in the forward direction. In this study, an end-to-end alternately updated spectral–spatial convolutional network (AUSSC) with a recurrent feedback structure is used to learn refined spectral and spatial features for HSI classification. The proposed AUSSC includes alternating updated blocks in which each layer serves as both an input and an output for the other layers. The AUSSC can refine spectral and spatial features many times under fixed parameters. A center loss function is introduced as an auxiliary objective function to improve the discrimination of features acquired by the model. Additionally, the AUSSC utilizes smaller convolutional kernels than other convolutional neural network (CNN)-based methods to reduce the number of parameters and alleviate overfitting. The proposed method was implemented on four HSI data sets: Indian Pines, Kennedy Space Center, Salinas Scene, and Houston. Experimental results demonstrated that the proposed AUSSC outperformed the HSI classification accuracy obtained by state-of-the-art deep learning-based methods with a small number of training samples.

<center>
<figure>
		<div id="projectid">
    <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/aussc_19_remote_sensing.png" width="700px" />
		</div>

<figcaption>
Fig 1. An overview of the proposed end-to-end alternately updated spectral–spatial convolutional network (AUSSC). 
</center>
<br>
An alternately updated spectral–spatial convolutional network is proposed for HSI classification. Fig. 1 shows an overview of the proposed method. For HSI data with L channels and a size of H×W, a spatial size of s×s was selected from the raw HSI data and used as the input to the AUSSC network. First, the AUSSC uses three smaller convolutional kernels to learn spectral and spatial features from an original HSI patch. Second, the alternately updated spectral and spatial blocks refine the deep spectral and spatial features using recurrent feedback. Finally, the model parameters are optimized using the cross-entropy loss and center-loss loss functions.
</figcaption>
</figure>

<center>
<figure>
		<div id="projectid">
    <img src="{{ site.url }}{{ site.baseurl }}/images/projectpic/19_aussc_alternately_updated_block.png" width="900px" />
		</div>
<figcaption>
Fig 2. Two stages of alternately updated spectral blocks with three convolutional layers. 
</center>
<br>
FDSSC Framework for HSI classification of labeled pixels. Because of the densely-connected method, the FDSSC network has a deeper structure resulting in extremely efficient performance. Finally, the convergence rate of the model is very fast because of the BN and PReLU applied tothe FDSSC network and dynamic learning rate, and early stopping. Therefore, the training time of the proposed framework is shorter, and although the FDSSC model has a high quantity of parameters, it lacks overfitting on account of the dropout layer in the FDSSC network, early stopping, and cross-validation.
</figcaption>
</figure>


<center>
<figure>
		<div id="projectid">
    <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/aussc_result.png" width="900px" />
		</div>

<figcaption>
<br>
Classification maps for Houston dataset.

</figcaption>
</figure>
</center>

[comment]: Paper
<h3> Paper </h3>

- Paper: <a href="{{ site.url }}{{ site.baseurl }}/papers/18remotesensing_fdssc.pdf" style="color: #CC0000"> PDF </a>

Please consider citing if this work and/or the corresponding code are useful for you:

```
@inproceedings{shuguang:aussc:2019,
	title = {Alternately Updated Spectral–Spatial Convolution Network for the Classification of Hyperspectral Images},
	author = {Wang, Wenju; Dou, Shuguang; Sen Wang.},
	journal = {Remote Sensing},
	volume={11}
        issue={9}
	year = {2019}
        article number={1068}
}
```

[comment]: Code
<h3> Code </h3>
We use tensorflow to implement alternatively updated spectral-spatial network framework. Code is available online in ths github repository:
<a href="https://github.com/shuguang-52/AUSSC" style="color: #CC0000">https://github.com/shuguang-52/AUSSC</a>.
