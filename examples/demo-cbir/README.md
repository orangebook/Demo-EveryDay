# [基于内容的图像检索(CBIR)](https://baike.baidu.com/item/%E5%9F%BA%E4%BA%8E%E5%86%85%E5%AE%B9%E7%9A%84%E5%9B%BE%E5%83%8F%E6%A3%80%E7%B4%A2)

## 系统涉及的算法

  - 传统数字图像处理特征(ORB\KAZE\AKAZE\BRISK\GFFT)
  - 图像重新编码: VLAD\Bow\RANSAC 将图像特征重新编码后，存储在特征库中，方便图像检索算法匹配
  - 图像检索算法: LSH\PQ\KD树

## 特征提取方法

- ### OPENCV

  ORB/SURF/SIFT/PCA-SIFT

- ### 图像感知哈希算法

  ahash/phash/dhash

- ### 基于区域的颜色直方图

  如果两张图颜色分布差不多，则认为它们相似

- ### SIFT

### 基于[milvus](https://github.com/milvus-io/milvus/tree/0.6.0)图片搜索引擎

### 基于深度学习——分类模型的图片识别

- vgg16

## 向量数据库

> 常用于图片、语音检索，对比的是DL算法提取的特征。

- http://mysql.taobao.org/monthly/2018/09/10/
- [高维空间最近邻逼近搜索算法评测](https://zhuanlan.zhihu.com/p/37381294)

## OpenCv Build

### Exception

```bash
  error "__POPCNT__ is not defined by compiler"
```

#### 添加构建工具为g++

```bash
cmake  -D CMAKE_CXX_COMPILER=g++ \
  -D OPENCV_EXTRA_MODULES_PATH=../opencv_contrib/modules \
  -D CMAKE_BUILD_TYPE=RELEASE \
  -D OPENCV_ENABLE_NONFREE=ON \
  ../
```

## 图片搜索服务提供商

- https://cloud.baidu.com/product/imagesearch
- https://cn.aliyun.com/product/imagesearch
- https://www.huaweicloud.com/intl/zh-cn/product/imagesearch.html

## Refers

- [Machine Intelligence - Lecture 5 (Computer Vision, Features, Fisher Vector, VLAD)](https://www.youtube.com/watch?v=c08dfv0iFJo)
- [ImageRetrieval](https://www.cnblogs.com/wangguchangqing/category/1241422.html)
- [【TPAMI重磅综述】 SIFT与CNN的碰撞：万字长文回顾图像检索任务十年探索历程（上）](https://zhuanlan.zhihu.com/p/38301227)
- [图像检索：向量索引](http://yongyuan.name/blog/vector-ann-search.html)
- https://www.cnblogs.com/think90/articles/11514792.html
- https://github.com/JohannesBuchner/imagehash
- https://www.cs.toronto.edu/~frossard/post/vgg16/
- https://blog.csdn.net/chenghaoy/article/details/84977406
- https://github.com/dmlc/gluon-cv
- https://gist.github.com/ksimonyan/211839e770f7b538e2d8#file-readme-md
- https://zhuanlan.zhihu.com/8thfloor
- https://machinelearningmastery.com/use-pre-trained-vgg-model-classify-objects-photographs/
- [SIFT](https://blog.csdn.net/Hi_Bitch/article/details/81209376)
- https://www.52cv.net/?p=975
- https://github.com/ZeLianWen/Image-Registration
- [学习资源：图像处理从入门到精通](https://zhuanlan.zhihu.com/p/67343443)
- [第五讲：传统目标检测之特征工程](https://zhuanlan.zhihu.com/p/66166633)
- [数字图像处理-电子科技大学-李庆嵘](https://www.bilibili.com/video/av69532731/?spm_id_from=333.788.videocard.0)
- [腾讯词向量实战：通过Annoy进行索引和快速查询](https://zhuanlan.zhihu.com/p/62894959)
- [腾讯AI实验室汉字词句嵌入语料库](https://ai.tencent.com/ailab/nlp/embedding.html)
- [汉字词句嵌入语料库](https://ai.tencent.com/ailab/nlp/data/Tencent_AILab_ChineseEmbedding.tar.gz)
- [用于大规模视觉识别的超深度卷积网络](http://www.robots.ox.ac.uk/~vgg/research/very_deep/)
- [awesome-cbir-papers](https://github.com/willard-yuan/awesome-cbir-papers)
- [ORB算法原理解读](https://blog.csdn.net/yang843061497/article/details/38553765)
- [余弦相似性](https://zh.wikipedia.org/wiki/%E4%BD%99%E5%BC%A6%E7%9B%B8%E4%BC%BC%E6%80%A7)
- [东城青年CSDN opencv](https://blog.csdn.net/qq_24946843/category_7999583.html)
- http://yongyuan.name/pic/
