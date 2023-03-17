---
title: "Shuguang Dou - eahasbench"
layout: gridlay
excerpt: "Shuguang Dou: eahasbench"
sitemap: false
permalink: /eahasbench/
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

<p style="text-align:justify; text-justify:inter-ideograph;">
We present the first large-scale energy-aware benchmark that allows studying AutoML methods to achieve better trade-offs between performance and search energy consumption, named EA-HAS-Bench. EA-HAS-Bench provides a **large-scale architecture/hyperparameter joint search space, covering diversified configurations related to energy consumption**. Furthermore, we propose a novel surrogate model specially designed for large joint search space, which proposes a Bezier curve-based model to predict learning curves with unlimited shape and length.</p>

<center>
<figure>
		<div id="projectid">
    <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/23_ICLR_BSC.png" width="600px" />
		</div>
<figcaption>
<br>
Figure 1.Overview of Bezier Curve-based Surrogate Model. HC denotes Hyperparameter configuration.

</figcaption>
</figure>
</center>

<p style="text-align:justify; text-justify:inter-ideograph;">
Most of the existing conventional benchmarks like `NAS-Bench-101` do not directly provide training energy cost but use model training time as the training resource budget, which as verified by our experiments, is an inaccurate estimation of energy cost. `HW-NAS-bench`  provides the inference latency and inference energy consumption of different model architectures but also does not provide the search energy cost. </p>
<p align="center">
<img src="https://github.com/microsoft/EA-HAS-Bench/blob/main/BSC/figures/Differences.png" alt="Differece" width="80%">
</p>
	
<h3>Dataset Overview</h3>
<h4>EA-HAS-Bench's Search Space</h4>
<p style="text-align:justify; text-justify:inter-ideograph;">Unlike the search space of existing mainstream NAS-Bench that focuses only on network architectures, our <code>EA-HAS-Bench</code> consists of a combination of two parts: the network architecture space- <code>RegNet</code>  and the hyperparameter space for optimization and training, in order to cover diversified configurations that affect both performance and energy consumption. The details of the search space are shown in Table.</p>
<p align="center">
    <img src="https://github.com/microsoft/EA-HAS-Bench/blob/main/BSC/figures/search_space.png" alt="SearchSpace" width="80%">
</p>

<h4>Evaluation Metrics</h4>
<p style="text-align:justify; text-justify:inter-ideograph;">The <code>EA-HAS-Bench</code> dataset provides the following three types of metrics to evaluate different configurations:</p>
<ul>
    <li><strong>Model Complexity:</strong> parameter size, FLOPs, number of network activations (the size of the output tensors of each convolutional layer), as well as the inference energy cost of the trained model.</li>
    <li><strong>Model Performance:</strong> <strong>full training information</strong> including training, validation, and test accuracy learning curves.</li>
    <li><strong>Search Cost:</strong> energy cost (in kWh) and time (in seconds).</li>
</ul>
<h4>Dataset Statistics</h4>
<p style="text-align:justify; text-justify:inter-ideograph;">The left plot shows the validation accuracy box plots for each NAS benchmark in CIFAR-10. The right plot shows a comparison of training time, training energy consumption (TEC), and test accuracy in the dataset.</p>
<div align="center">
    <img src="https://github.com/microsoft/EA-HAS-Bench/blob/main/BSC/figures/Box_plot.jpg" height=300/><img src="https://github.com/microsoft/EA-HAS-Bench/blob/main/BSC/figures/Tiny_Acc_as_color.jpg" height=300/>
</div>
<p style="text-align:justify; text-justify:inter-ideograph;">Although training the model for a longer period is likely to yield a higher energy cost, the final cost still depends on many other factors including power (i.e., consumed energy per hour). The left and right plots of Figure also verifies the conclusion, where the models in the Pareto Frontier on the accuracy-runtime coordinate (right figure) are not always in the Pareto Frontier on the accuracy-TEC coordinate (left figure), showing that training time and energy cost are not equivalent.</p>
<div align="center">
    <img src="https://github.com/microsoft/EA-HAS-Bench/blob/main/BSC/figures/Tiny_Acc_Cost.jpg" height=300/><img src="https://github.com/microsoft/EA-HAS-Bench/blob/main/BSC/figures/Tiny_Acc_Time.jpg" height=300/>
</div>
    

[comment]: Paper
<h3> Paper </h3>

- Paper: <a href="{{ site.url }}{{ site.baseurl }}/papers/23iclr_ea_has_bench.pdf" style="color: #CC0000"> PDF </a>

Please consider citing if this work and/or the corresponding code and dataset are useful for you:

```
@inproceedings{ea23iclr,
title={EA-HAS-Bench: Energy-aware Hyperparameter and Architecture Search Benchmark},
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
