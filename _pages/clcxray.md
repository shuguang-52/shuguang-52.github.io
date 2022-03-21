---
title: "Shuguang Dou - CLCX-ray"
layout: gridlay
excerpt: "Shuguang Dou: CLCX-ray"
sitemap: false
permalink: /clcxray/
---

[comment]: Title
<h2 align="center"> Detecting Overlapped Objects in X-ray SecurityImagery by a Label-aware Mechanism </h2>
<p>&nbsp;</p>

[comment]: Authors
<p style="text-align: center;">
<a style="color: #CC0000">Cairong Zhao* </a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a style="color: #CC0000">Liang Zhu *</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://shuguang-52.github.io/" style="color: #CC0000"> Shuguang Dou </a>
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a style="color: #CC0000">Weihong Deng</a> 
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a style="color: #CC0000">Liang Wang, Fellow, IEEE </a>
<br/>
</p>
<p>&nbsp;</p>

[comment]: Abstract
<h3> Abstract </h3>
<p style="text-align:justify; text-justify:inter-ideograph;">One of the key challenges to the X-ray security checkis to detect the overlapped items in backpacks or suitcases inthe X-ray images. Most existing methods improve the robustnessof models to the object overlapping problem by enhancingthe underlying visual information such as colors and edges.However, this strategy ignores the situations that the objectshave similar visual clues as to the background, and objectsoverlapping each other. Since the two cases rarely appear inexisting datasets, we contribute a novel dataset – Cutters andLiquid Containers X-ray Dataset (CLCXray) to complete therelated research. Furthermore, we propose a novel Label-awareMechanism (LA) to tackle the object overlapping problem.Particularly, LA establishes the associations between featurechannels and different labels and adjusts the features accordingto the assigned labels (or pseudo labels) to help improve theprediction results. Extensive experiments demonstrate that theLA is accurate and robust to detect overlapped objects, andalso validate the effectiveness and the good generalization of theLA for arbitrary state-of-the-art (SOTA) methods. Furthermore,experimental results show that the network constructed by theLA is superior to the SOTA models on OPIXray and CLCXray,especially solving the challenges of the subset of the highlyoverlapped objects.</p>

<center>
<figure>
		<div id="projectid">
    <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/21_tip_igoas.png" width="600px" />
		</div>
<figcaption>
<br>
Figure 1.The flowchart of the proposed IGOAS network
</figcaption>
</figure>
</center>

<p style="text-align:justify; text-justify:inter-ideograph;">
Specifically, in the training phase, the IGO block converts the raw input into occluded data, and then the raw data and the occluded data are entered into the respective branch of the frame for feature extraction. In global branch, we retain the ResNet-50 baseline to extract steady global features of the raw data. In adversarial suppression branch, the OSM and a global max pooling operation are employing to force this branch to suppress the occlusion’s response and strengthen discriminative feature representation on non-occluded regions of the pedestrian. Finally, we get a more robust pedestrian feature descriptor by concatenating two branches’ features. And in the test phase, the incremental occlusion block won’t be performed. </p>

<center>
<figure>
		<div id="projectid">
    <img src="{{ site.url }}{{ site.baseurl }}/images/projectpic/21_igoas_osm.png" width="300px" />
		</div>

<figcaption>
<br>
Figure 2.Structure of OSM
</figcaption>
</figure>
</center>
<p style="text-align:justify; text-justify:inter-ideograph;">We propose an incremental generative occlusion adversarial suppression network. The IGOAS network first generates easy-to-hard occluded data through the IGO block and then suppresses the generated occluded region with the adversarial suppression branch. In this process of adversarial learning, the IGOAS learns a more discriminative and robust feature for the occlusion problem.</p>


<center>
<figure>
		<div id="projectid">
    <img src="{{ site.url }}{{ site.baseurl }}/images/projectpic/21_igoas_igo.png" width="400px" />
		</div>
<figcaption>
<br>
Figure 3.Batch-Based Incremental Generative Occlusion Block.

</figcaption>
</figure>
</center>


[comment]: Paper
<h3> Paper </h3>

- Paper: <a href="{{ site.url }}{{ site.baseurl }}/papers/22tifs_clcxray.pdf" style="color: #CC0000"> PDF </a>

Please consider citing if this work and/or the corresponding code are useful for you:

```
@article{tifs22,
   author = {Zhao, Cairong and Liang Zhu and Dou, Shuguang and Zhang, Shanshan and Wu, Jun and Wang, Liang},
   title = {Detecting Overlapped Objects in X-ray SecurityImagery by a Label-aware Mechanism},
   journal = {IEEE Transactions on Information Forensics and Security},
   volume = {17},
   pages = {998-1009},
   DOI = {10.1109/TIFS.2022.3154287},
   year = {2022},
   type = {Journal Article}
}
```

[comment]: Dataset
<h3> Dataset </h3>
Dataset is available online in ths github repository:
<a href="https://github.com/Vill-Lab/CLCXray" style="color: #CC0000">https://github.com/Vill-Lab/IGOAS</a>.


