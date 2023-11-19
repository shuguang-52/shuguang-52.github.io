---
title: "Shuguang Dou - backdoor"
layout: gridlay
excerpt: "Shuguang Dou: backdoor"
sitemap: false
permalink: /backdoor/
---

[comment]: Title
<h2 align="center"> Invisible Backdoor Attack with Dynamic Triggers against Person Re-IDentification </h2>
<p>&nbsp;</p>

[comment]: Authors
<p style="text-align: center;">
<a style="color: #CC0000"> Wenli Sun*</a>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a style="color: #CC0000"> Xinyang Jiang</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://shuguang-52.github.io/" style="color: #CC0000"> Shuguang Dou </a>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a style="color: #CC0000">Dongsheng Li</a> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a style="color: #CC0000">Duoqian Miao</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a style="color: #CC0000">Cheng Deng</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a style="color: #CC0000">Cairong Zhao*</a>

<br/>
</p>
<p>&nbsp;</p>

[comment]: Abstract
<h3> Abstract </h3>
<p style="text-align:justify; text-justify:inter-ideograph;">—In recent years, person Re-IDentification (ReID) has rapidly progressed with wide real-world applications but is also susceptible to various forms of attack, including proven vulnerability to adversarial attacks. In this paper, we focus on
the backdoor attack on deep ReID models. Existing backdoor attack methods follow an all-to-one or all-to-all attack scenario,
where all the target classes in the test set have already been seen in the training set. However, ReID is a much more complex fine-grained open-set recognition problem, where the identities in the test set are not contained in the training set. Thus, previous
backdoor attack methods for classification are not applicable to ReID. To ameliorate this issue, we propose a novel backdoor attack on deep ReID under a new all-to-unknown scenario, called Dynamic Triggers Invisible Backdoor Attack (DT-IBA).
Instead of learning fixed triggers for the target classes from the training set, DT-IBA can dynamically generate new triggers for any unknown identities. Specifically, an identity hashing network is proposed to first extract target identity information from a
reference image, which is then injected into the benign images by image steganography. We extensively validate the effectiveness and stealthiness of the proposed attack on benchmark datasets and evaluate the effectiveness of several defense methods against our attack.
<p style="text-align:justify; text-justify:inter-ideograph;">
We raise a new and rarely studied backdoor attack risk on the ReID task, which is quantified by our proposed new all-to-unknown attack scenario. The new all-to-unknown attack scenario and a novel corresponding method are proposed to realize adversary mismatch and target person impersonation by dynamic triggers, which are able to dynamically alter the poisoned image’s identity to any target identity outside the training set.


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

<center>
<figure>
		<div id="projectid">
    <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/iclr23/Differences.png" width="600px" />
		</div>
</figure>
</center>

	
<h3>Dataset Overview</h3>
<h4>EA-HAS-Bench's Search Space</h4>
<p style="text-align:justify; text-justify:inter-ideograph;">Unlike the search space of existing mainstream NAS-Bench that focuses only on network architectures, our <code>EA-HAS-Bench</code> consists of a combination of two parts: the network architecture space- <code>RegNet</code>  and the hyperparameter space for optimization and training, in order to cover diversified configurations that affect both performance and energy consumption. The details of the search space are shown in Table.</p>

<center>
<figure>
		<div id="projectid">
    <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/iclr23/search_space.png" width="600px" />
		</div>
</figure>
</center>


<h4>Evaluation Metrics</h4>
<p style="text-align:justify; text-justify:inter-ideograph;">The <code>EA-HAS-Bench</code> dataset provides the following three types of metrics to evaluate different configurations:</p>
<ul>
    <li><strong>Model Complexity:</strong> parameter size, FLOPs, number of network activations (the size of the output tensors of each convolutional layer), as well as the inference energy cost of the trained model.</li>
    <li><strong>Model Performance:</strong> <strong>full training information</strong> including training, validation, and test accuracy learning curves.</li>
    <li><strong>Search Cost:</strong> energy cost (in kWh) and time (in seconds).</li>
</ul>
<h4>Dataset Statistics</h4>
<p style="text-align:justify; text-justify:inter-ideograph;">The left plot shows the validation accuracy box plots for each NAS benchmark in CIFAR-10. The right plot shows a comparison of training time, training energy consumption (TEC), and test accuracy in the dataset.</p>

<center>
<figure>
		<div id="projectid">
    <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/iclr23/Box_plot.jpg" height="300px"/><img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/iclr23/Tiny_Acc_as_color.jpg" height="300px"/>
		</div>
</figure>
</center>

<p style="text-align:justify; text-justify:inter-ideograph;">Although training the model for a longer period is likely to yield a higher energy cost, the final cost still depends on many other factors including power (i.e., consumed energy per hour). The left and right plots of Figure also verifies the conclusion, where the models in the Pareto Frontier on the accuracy-runtime coordinate (right figure) are not always in the Pareto Frontier on the accuracy-TEC coordinate (left figure), showing that training time and energy cost are not equivalent.</p>

<center>
<figure>
		<div id="projectid">
    <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/iclr23/Tiny_Acc_Cost.jpg" height="300px"/><img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/iclr23/Tiny_Acc_Time.jpg" height="300px"/>
		</div>
</figure>
</center>

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
