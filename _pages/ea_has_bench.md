---
title: "Shuguang Dou - ea_has_bench"
layout: gridlay
excerpt: "Shuguang Dou: ea_has_bench"
sitemap: false
permalink: /ea_has_bench/
---

[comment]: Title
<h2 align="center"> EA-HAS-Bench: Energy-Aware Hyperparameter and Architecture Search Benchmark </h2>
<p>&nbsp;</p>

[comment]: Authors
<p style="text-align: center;">
<a href="https://shuguang-52.github.io/" style="color: #CC0000"> Shuguang Dou </a>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a style="color: #CC0000"> Xinyang Jiang*</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a style="color: #CC0000">Cairong Zhao*</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a style="color: #CC0000">Dongsheng Li</a> 
<br/>
</p>
<p>&nbsp;</p>

[comment]: Abstract
<h3> Abstract </h3>
<p style="text-align:justify; text-justify:inter-ideograph;">The energy consumption for training deep learning models is increasing at an alarming rate due to the growth of training data and model scale, resulting in a negative impact on carbon neutrality. Energy consumption is an especially pressing issue for AutoML algorithms because it usually requires repeatedly training large numbers of computationally intensive deep models to search for optimal configurations. This paper takes one of the most essential steps in developing energy-aware (EA) NAS methods, by providing a benchmark that makes EANAS research more reproducible and accessible. Specifically, we present the first large-scale energy-aware benchmark that allows studying AutoML methods to achieve better trade-offs between performance and search energy consumption, named EA-HAS-Bench. EA-HAS-Bench provides a large-scale architecture/hyperparameter joint search space, covering diversified configurations related to energy consumption. Furthermore, we propose a novel surrogate model specially designed for large joint search space, which proposes a Bezier curve-based model to predict learning curves with unlimited shape and length. Based on the proposed dataset, we modify existing AutoML algorithms to consider the search energy consumption, and our experiments show that the modified energy-aware AutoML methods achieve a better trade-off between energy consumption and model performance.</p>

<center>
<figure>
		<div id="projectid">
    <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/23_ICLR_BSC.png" width="600px" />
		</div>
<figcaption>
<br>
Figure 1.The flowchart of the proposed HCGA framework. (a) Human Co-parsing network (HCNet). (b) Person ReID network (PRNet). The proposed HCGA consists of HCNet and PRNet. The two sub-networks share the backbone and are trained alternately until optimized to the best. Specifically, PRNet refines the parameters to make the difference between features with different semantics greater. HCNet yields better segmentation results based on the refined features to guide PRNet alignment at the pixel level.

</figcaption>
</figure>
</center>

<p style="text-align:justify; text-justify:inter-ideograph;">
	
To illustrate our approach and verify the generality of HCNet, we apply HCNet directly on the RGB image rather than on the feature map extracted by the encoder. The RGB pixel values of a set of images with the same ID are normalized and then fed into the decoder. As shown in the following Figure, the predicted labels are haphazard at epoch 1. The background and foreground are gradually separated with the network convergence. The best results of segmentation are achieved at epoch 20 when the unique predicted labels converge to a certain number. If the network continues to converge, the objective function is close to 0 and all pixels of images are assigned to one label. This is the reason that we set the minimum number of unique predicted labels in Algorithm 1. Due to the direct use of pixel values as input, the segmentation network may fail when the color and texture of the background and foreground are similar. Therefore, we use the deep network with an encoder-decoder structure. Besides, the proposed method can segment the blue bag in the hand of the pedestrian from the background compared with Human parsing</p>
<center>
<figure>
		<div id="projectid">
    <img src="{{ site.url }}{{ site.baseurl }}/images/projectpic/22_hcga_vis.jpg" width="600px" />
		</div>
<figcaption>
<br>
Figure 2. Visualization of the clustering process of HCNet trained directly on RGB images with the same ID. Different colors indicate different clustering categories, where green and gray are background categories and yellow and red are foreground categories. The training process is represented from top to bottom and is best viewed in color.
</figcaption>
</figure>
</center>
<p style="text-align:justify; text-justify:inter-ideograph;">In this work, we propose a Human Co-parsing Guided Alignment (HCGA) framework for the task of person ReID. We design local spatial consistency, semantic consistency, and background group losses to weakly supervise the human co-parsing network. The parsing result generated by HCNet guides PRNet to be aligned at the pixel level. PRNet uses a guided alignment module to reduce the uncertainty of segmentation prediction. During inference, only PRNet is used to obtain foreground features and human parts features for matching. Experimental results show that the proposed framework is effective for both holistic and occlusion person ReID problems. Moreover, the visualization results demonstrate that weakly supervised human co-parsing has great potential for occluded person ReID.</p>

[comment]: Paper
<h3> Paper </h3>

- Paper: <a href="{{ site.url }}{{ site.baseurl }}/papers/23iclr_ea_has_bench.pdf" style="color: #CC0000"> PDF </a>

Please consider citing if this work and/or the corresponding code and dataset are useful for you:

```
@inproceedings{ea23iclr,
title={{EA}-{HAS}-Bench: Energy-aware Hyperparameter and Architecture Search Benchmark},
author={Dou, Shuguang and JIANG, XINYANG and Zhao, Cai Rong and Li, Dongsheng},
booktitle={International Conference on Learning Representations },
year={2023},
url={https://openreview.net/forum?id=n-bvaLSCC78},
note={ICLR 2023 notable top 25%}
}
```

[comment]: Code and Dataset
<h3> Code </h3>
Code is available online in ths github repository:
<a href="https://github.com/microsoft/EA-HAS-Bench" style="color: #CC0000">https://github.com/microsoft/EA-HAS-Bench</a>.
