import "./App.css";
import { Blog } from "./Blog/index";
import { Home } from "./Home/index";
import { Visual } from "./Visual/index";
import { Music } from "./Music/index";

function App() {
  const bo = function () {
    console.log("111");
  };
  return (
    <div className="App">
      <div className="head">HYW'S WEBSITE</div>
      <div className="project">
        <Home />
        <div className="introduction">
          <span className="title">知识库BLOG</span>
          <div className="content">
            <b>主要内容:</b> <br />
            研究生期间学习记录。包括前端三大件html、css、JavaScript相关知识的笔记；前端框架Vue2、Vue3、React、Angular的学习记录以及相关实战项目的技术文档归纳。
            除了前端知识以外，还含有node.js学习记录以及对应的后端开发项目介绍和技术文档、机器学习/神经网络学习记录、车辆动力学仿真（lsdyna有限元，simpack多体动力学）项目记录。最后含相关学术成果与介绍。
          </div>
          <div className="tech">
            <b>技术栈</b>: <br />
            基于VuePress静态网站生成器。以 Markdown
            为中心的项目结构，以最少的配置帮助你专注于写作。享受 Vue + webpack
            的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue
            来开发自定义主题。 VuePress 会为每个页面预渲染生成静态的
            HTML，同时，每个页面被加载的时候，将作为 SPA 运行。
            内容的更新通过传入md格式文件进行，以静态页面形式部署即可。
          </div>
          <div className="enter">
            <a href="http://162.14.65.241/hyw/" target="_blank">
              点击进入
            </a>
          </div>
        </div>
      </div>
      <div className="project">
        <Blog />
        <div className="introduction">
          <span className="title">研究生小组周报系统</span>
          <div className="content">
            <b>主要内容:</b> <br />
            该系统开发来用于研究生小组每周组会汇报使用。由周报展示前台，周报管理后台以及周报后端组成。其中周报管理前台主要汇总展示当周周报、个人所有周报、各周所有周报。
            周报管理后台在前台功能基础上，增加了写、修、删周报功能、草稿箱功能、用户管理功能等。周报后端实现周报内容、用户信息、照片、文件增删改查等功能。该系统用于研究生小组汇报，可有效提高组会探讨效率。
          </div>
          <div className="tech">
            <b>技术栈</b>: <br />
            周报前台页面基于Vue2 + ElementUI + mavonEditor + axios开发；
            <br />
            周报后台管理系统选用Vue-admin-template中后台框架，基于Vue2 +
            elementUI + mavonEditor + axios + vueX开发；
            <br />
            周报后端基于node.js，采用express +
            mysql开发，使用joi设置验证规则，cors解决跨域，express-jwt解析token等。
          </div>
          <div className="enter">
            <a href="http://162.14.65.241/hyw-blog" target="_blank">
              周报前台-点击进入
            </a>
          </div>
          <div className="enter">
            <a href="http://162.14.65.241/hyw-blog-management" target="_blank">
              周报后台-点击进入
            </a>
          </div>
        </div>
      </div>
      <div className="project">
        <Visual />
        <div className="introduction">
          <span className="title">可视化数据大屏展示</span>
          <div className="content">
            <b>主要内容:</b> <br />
            该系统开发来用于展示大屏数据，设计稿为1920*1080，实现rem适应布局。数据展示包括折线图、饼状图、条形图等。各模块可点击放大至中间展示区位置。
            数据的动态展示以折线图为例，采用数组前出后进形式。后续开发中，会继续扩展如播放视频，高频数据展示等功能。
          </div>
          <div className="tech">
            <b>技术栈</b>: <br />
            基于Vue3 + Vite + Echart + ElementPlus + Three.js + Typescript开发。
          </div>
          <div className="enter">
            <a href="http://162.14.65.241/hyw-vs" target="_blank">
              点击进入
            </a>
          </div>
        </div>
      </div>
      <div className="project">
        <Music />
        <div className="introduction">
          <span className="title">多端网易云音乐仿写</span>
          <div className="content">
            <b>主要内容:</b> <br />
            该系统采用网易云提供的后端api进行仿写，采用uni框架实现小程序、web端、h5端多端开发。功能包括排行榜页面、搜索页面、音乐播放页面等功能。
          </div>
          <div className="tech">
            <b>技术栈</b>: <br />
            基于Vue2 + Uni + vueX开发。
          </div>
          <div className="enter">
            <a href="http://162.14.65.241/music" target="_blank">
              点击进入
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
