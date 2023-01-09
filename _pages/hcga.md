---
title: "Shuguang Dou - hcga"
layout: gridlay
excerpt: "Shuguang Dou: hcga"
sitemap: false
permalink: /hcga/
---

[comment]: Title
<h2 align="center"> Human Co-Parsing Guided Alignment for Occluded Person Re-identification </h2>
<p>&nbsp;</p>

[comment]: Authors
<p style="text-align: center;">
<a href="https://shuguang-52.github.io/" style="color: #CC0000"> Shuguang Dou </a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a style="color: #CC0000">Cairong Zhao*</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a style="color: #CC0000"> Xinyang Jiang </a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a style="color: #CC0000">Shanshan Zhang, Memeber, IEEE </a> 
<br/>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a style="color: #CC0000">Wei-Shi Zheng </a>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a style="color: #CC0000">Wangmeng Zuo, Senior Member, IEEE </a>
<br/>
</p>
<p>&nbsp;</p>

[comment]: Abstract
<h3> Abstract </h3>
<p style="text-align:justify; text-justify:inter-ideograph;">Occluded person re-identification (ReID) is a challenging task due to more background noises and incomplete foreground information. Although existing human parsing-based ReID methods can tackle this problem with semantic alignment at the finest pixel level, their performance is heavily affected by the human parsing model. Most supervised methods propose to train an extra human parsing model aside from the ReID model with cross-domain human parts annotation, suffering from expensive annotation cost and domain gap; Unsupervised methods integrate a feature clustering-based human parsing process into the ReID model, but lacking supervision signals brings less satisfactory segmentation results. In this paper, we argue that the pre-existing information in the ReID training dataset can be directly used as supervision signals to train the human parsing model without any extra annotation. By integrating a *weakly supervised human co-parsing* network into the ReID network, we propose a novel framework that exploits shared information across different images of the same pedestrian, called the Human Co-parsing Guided Alignment (HCGA) framework.
Specifically, the human co-parsing network is weakly supervised by three consistency criteria, namely global semantics, local space, and background. By feeding the semantic information and deep
features from the person ReID network into the guided alignment module, features of the foreground and human parts can then be obtained for effective occluded person ReID. Experiment results on two occluded and two holistic datasets demonstrate the superiority of our method. Especially on Occluded-DukeMTMC, it achieves 70.2% Rank-1 accuracy and 57.5% mAP.</p>

<center>
<figure>
		<div id="projectid">
    <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/22_tip_hcga.png" width="600px" />
		</div>
<figcaption>
<br>
Figure 1.The flowchart of the proposed HCGA framework. (a) Human Co-parsing network (HCNet). (b) Person ReID network (PRNet). The proposed HCGA consists of HCNet and PRNet. The two sub-networks share the backbone and are trained alternately until optimized to the best. Specifically, PRNet refines the parameters to make the difference between features with different semantics greater. HCNet yields better segmentation results based on the refined features to guide PRNet alignment at the pixel level.

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
    <img src="{{ site.url }}{{ site.baseurl }}/images/projectpic/22_clcxray_bbox.png" width="600px" />
		</div>

<figcaption>
<br>
Figure 2.Visualization of bbox annotations on OPIXray, SIXray, and CLCXray. (A) shows the annotations in SIXray. The threat objects in SIXray are mainly guns. (B) shows the annotations in OPIXray. The threat objects in OPIXray are mainly knives. (C) shows the annotations in CLCXray. The threat objects in CLCXray are mainly liquid containers.
</figcaption>
</figure>
</center>
<p style="text-align:justify; text-justify:inter-ideograph;">In this paper, we combine LA and ATSS to build our network. ATSS has the following improvements based on.RetinaNet. Structurally, ATSS uses five-layer FPN and predicts the regression quality score, center-ness, on the regression branch. In the choice of regression loss, ATSS uses GIoU loss. In the label assignment strategy, ATSS changes the fixed threshold for assigning positive or negative labels to the dynamic threshold based on the statistics of IoUs of anchors and ground truth bbox. As shown in Fig. 3, our overall network structure is similar to ATSS, except that a new branch Labelaware is added to the Head part. The Label-aware branch forms a reverse network from the prediction results and the label assignment to the feature map. Thus, there is a loop in the Head part. In our setting, this loop happens only once. Specifically, the network makes two predictions, and the regression branch repeats twice in the second prediction. When calculating the loss function, the first prediction is not considered.</p>

<center>
<figure>
		<div id="projectid">
    <img src="{{ site.url }}{{ site.baseurl }}/images/projectpic/22_clcxray_pipeline.png" width="600px" />
		</div>
<figcaption>
<br>
Figure 3. Overall Framework
</figcaption>
</figure>
</center>


[comment]: Paper
<h3> Paper </h3>

- Paper: <a href="{{ site.url }}{{ site.baseurl }}/papers/22tip_hcga.pdf" style="color: #CC0000"> PDF </a>

Please consider citing if this work and/or the corresponding code are useful for you:

```
@article{hcga22tip,
  author={Dou, Shuguang and Zhao, Cairong and Jiang, Xinyang and Zhang, Shanshan and Zheng, Wei-Shi and Zuo, Wangmeng},
  journal={IEEE Transactions on Image Processing}, 
  title={Human Co-Parsing Guided Alignment for Occluded Person Re-Identification}, 
  year={2023},
  volume={32},
  pages={458-470},
  doi={10.1109/TIP.2022.3229639}}
}
```

[comment]: Code
<h3> Code </h3>
Code is available online in ths github repository:
<a href="[https://github.com/Vill-Lab/2022-TIP-HCGA](https://github.com/Vill-Lab/2022-TIP-HCGA)" style="color: #CC0000">[https://github.com/Vill-Lab/2022-TIP-HCGA](https://github.com/Vill-Lab/2022-TIP-HCGA)</a>.
