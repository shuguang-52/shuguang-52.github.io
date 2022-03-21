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
    <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/22_tifs_clcxray.png" width="600px" />
		</div>
<figcaption>
<br>
Figure 1.Samples of 12 categories and corresponding X-ray images. The X-ray image dataset contains various cutters and liquid containers that may contain flammable or explosive liquids
</figcaption>
</figure>
</center>

<p style="text-align:justify; text-justify:inter-ideograph;">
We contribute a new dataset CLCXray for the overlap problem. Different from all existing datasets, CLCXray provides a large number of overlapped objects based
on real scenes, which provides a good foundation for the research of the overlap problem. Besides, CLCXray takes hazardous liquids into consideration, expanding the
scope of research on threat objects. Moreover, CLCXray provides high-precision annotations, which makes up for the current lack of high-quality bounding box (bbox) annotations. </p>

<center>
<figure>
		<div id="projectid">
    <img src="{{ site.url }}{{ site.baseurl }}/images/projectpic/22_clcxray_bbox.png" width="300px" />
		</div>

<figcaption>
<br>
Figure 2.Visualization of bbox annotations on OPIXray, SIXray, and CLCXray. (A) shows the annotations in SIXray. The threat objects in SIXray are mainly guns. (B) shows the annotations in OPIXray. The threat objects in OPIXray are mainly knives. (C) shows the annotations in CLCXray. The threat objects in CLCXray are mainly liquid containers.
</figcaption>
</figure>
</center>
<p style="text-align:justify; text-justify:inter-ideograph;">In this paper, we combine LA and ATSS to build our network. ATSS has the following improvements based on.RetinaNet. Structurally, ATSS uses five-layer FPN and predicts the regression quality score, center-ness, on the regression branch. In the choice of regression loss, ATSS uses GIoU loss. In the label assignment strategy, ATSS changes the fixed threshold for assigning positive or negative labels to the dynamic threshold based on the statistics of IoUs of anchors and ground truth bbox. As shown in Fig. 6, our overall network structure is similar to ATSS, except that a new branch Labelaware is added to the Head part. The Label-aware branch forms a reverse network from the prediction results and the label assignment to the feature map. Thus, there is a loop in the Head part. In our setting, this loop happens only once. Specifically, the network makes two predictions, and the regression branch repeats twice in the second prediction. When calculating the loss function, the first prediction is not considered.</p>

<center>
<figure>
		<div id="projectid">
    <img src="{{ site.url }}{{ site.baseurl }}/images/projectpic/22_clcxray_pipeline.png" width="400px" />
		</div>
<figcaption>
<br>
Figure 3. Overall Framework
</figcaption>
</figure>
</center>


[comment]: Paper
<h3> Paper </h3>

- Paper: <a href="{{ site.url }}{{ site.baseurl }}/papers/22tifs_clcxray.pdf" style="color: #CC0000"> PDF </a>

Please consider citing if this work and/or the corresponding code are useful for you:

```
@article{tifs22,
   author = {Zhao, Cairong and Liang Zhu and Dou, Shuguang and Weihong Deng and Wang, Liang},
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
<a href="https://github.com/Vill-Lab/CLCXray" style="color: #CC0000">https://github.com/Vill-Lab/CLCXray</a>.


