import "./App.css";
import { QD } from "./QD/index";
import { Blog } from "./Blog/index";
import { Home } from "./Home/index";
import { Visual } from "./Visual/index";
import { Music } from "./Music/index";
// eslint-disable-next-line
function App() {
  const bo = function () {
    console.log("111");
  };

  return (
    <div className="App">
      <div className="head">
        <div className="headtitle">
          HYW's wor<span className="t">ld</span>
        </div>
        <div className="headnote">
          <span className="p">知识库 </span>
          <span className="p">项目</span>
          <span className="p">笔记</span>
          <span className="p t">练手</span>
          <span className="p t">学习</span>
        </div>
      </div>
       <div className="project">
        <div className="introduction">
          <span className="title">铁道动力学仿真前后处理系统</span>
          <div className="content">
            <b>主要内容:</b> <br />
            <div className="techcon">该系统开发来用于铁路领域仿真的前处理模块和后处理模块。</div>
            <div className="tagList">
              <div className="tagweek">
                <div className="tagtit">前处理模块</div>
                <div className="tagcon">仿真初始参数输入、配置文件的导入导出、二维轨道横纵可视化、三维车辆可视化</div>
                </div>
                <div className="tagweek">
                  <div className="tagtit">后处理模块</div>
                  <div className="tagcon">基于unity render的视频流云渲染、视频界面的人机交互、结果文件导出</div>
                </div>
              <div className="tag">
                <div className="tagtit">作用</div>
                <div className="tagcon">该项目所开发的系统用于开发国产化动力学仿真软件提供可视化界面。</div>
              </div>
            </div>
            
          </div>
          <div className="tech">
            <b>技术栈</b>: <br />
            <div className="techcon">
            React: 基础框架；Umi：提供多终端自适应以及全局管理等；Antd+Antd pro: UI元素设计；Fabric: 2D轨道线路横纵断面预览图；Three：3D模型展示；Websocket：视频流接收。<br/>主要功能包括：仿真数据输入与校验，配置文件导出与导入，项目与用户管理， 2D轨道图形渲染，3D结果模型渲染，后处理云渲染技术，结果文件下载，以及与后端、unity端的交互。这使得用户无需安装专业软件，通过电脑、手机、平板网页访问，即可随时随地设置仿真
            </div>
          </div>
          <div className="enter" >
            <a href="http://162.14.65.241/hyw/project/QD/qd.html" target="_blank">
              系统详情介绍-点击进入
            </a>
          </div>
        </div>
        <QD />
      </div>
      <div className="project">
        <Home />
        <div className="introduction">
          <span className="title">知识库BLOG</span>
          <div className="content">
            <b>主要内容:</b> <br />
            <div className="techcon">研究生期间学习记录。包括:</div>
            <div className="tagList">
              <div className="tag">
                <div className="tagtit">前端三大件</div>
                <div className="tagcon">HTML CSS JavaScript</div>
                </div>
                <div className="tag">
                  <div className="tagtit">框架</div>
                  <div className="tagcon">Vue React Angular</div>
                </div>
              <div className="tag">
                <div className="tagtit">后端</div>{" "}
                <div className="tagcon">基于Node.js的express框架</div>
              </div>
              <div className="tag">
                <div className="tagtit">车辆动力学仿真</div>
                <div className="tagcon">lsdyna simpack</div>
              </div>
            </div>
          </div>
          <div className="tech">
            <b>技术栈</b>: <br />
            <div className="techcon">
            基于vuePress静态网站生成器。以 md
            为中心的项目结构，以最少的配置帮助你专注于写作。享受 vue + webpack
            的开发体验，可以在 md 中使用 vue 组件，又可以使用 vue
            来开发自定义主题。
            </div>
            <div className="techcon">
              vuePress 会为每个页面预渲染生成静态的
            html，同时，每个页面被加载的时候，将作为 spa 运行。
            内容的更新通过传入md格式文件进行，以静态页面形式部署即可。
            </div>
            
          </div>
          <div className="enter" >
            <a href="http://162.14.65.241/hyw/" target="_blank">
              点击进入
            </a>
          </div>
        </div>
      </div>
      <div className="project">
        <div className="introduction">
          <span className="title">研究生小组周报系统</span>
          <div className="content">
            <b>主要内容:</b> <br />
            <div className="techcon">该系统开发来用于研究生小组每周组会汇报使用。</div>
            <div className="tagList">
              <div className="tagweek">
                <div className="tagtit">周报前台</div>
                <div className="tagcon">展示当周周报、个人所有周报、各周所有周报</div>
                </div>
                <div className="tagweek">
                  <div className="tagtit">周报后台</div>
                  <div className="tagcon">增加了写、修、删周报功能、草稿箱功能、用户管理功能等</div>
                </div>
              <div className="tag">
                <div className="tagtit">后端</div>{" "}
                <div className="tagcon">实现周报内容、用户信息、照片、文件增删改查等功能</div>
              </div>
              <div className="tag">
                <div className="tagtit">作用</div>
                <div className="tagcon">该系统用于研究生小组汇报，可有效提高组会探讨效率</div>
              </div>
            </div>
            
          </div>
          <div className="tech">
            <b>技术栈</b>: <br />
            <div className="techcon">
            周报前台页面基于Vue2 + ElementUI + mavonEditor + axios开发;
            </div>
            <div className="techcon">
            周报后台管理系统选用Vue-admin-template中后台框架，基于Vue2 +
            elementUI + mavonEditor + axios + vueX开发;
            </div>
            <div className="techcon">
            周周报后端基于node.js，采用express +
            mysql开发，使用joi设置验证规则，cors解决跨域，express-jwt解析token等。
            </div>
          </div>
          <div className="enter" >
            <a href="http://162.14.65.241/hyw-blog" target="_blank">
              周报前台-点击进入
            </a>
          </div>
          <div className="enter" >
            <a href="http://162.14.65.241/hyw-blog-management" target="_blank">
              周报后台-点击进入
            </a>
          </div>
        </div>
        <Blog />
      </div>
      <div className="project">
        <Visual />
        <div className="introduction">
          <span className="title">可视化数据大屏展示</span>
          <div className="content">
            <b>主要内容:</b> <br />
            <div className="techcon">该系统开发来用于展示大屏数据，设计稿为1920*1080，实现rem适应布局。数据展示包括折线图、饼状图、条形图等。各模块可点击放大至中间展示区位置。
            数据的动态展示以折线图为例，采用数组前出后进形式。后续开发中，会继续扩展如播放视频，高频数据展示等功能。</div>
          </div>
          <div className="tech">
            <b>技术栈</b>: <br />
            <div className="techcon">基于Vue3 + Vite + Echart + ElementPlus + Three.js + Typescript开发。</div>
            
          </div>
          <div className="enter" >
            <a href="http://162.14.65.241/hyw-vs" target="_blank">
              点击进入
            </a>
          </div>
        </div>
      </div>
      <div className="project">
        <div className="introduction">
          <span className="title">多端网易云音乐仿写</span>
          <div className="content">
            <b>主要内容:</b> <br />
            <div className="techcon"> 该系统采用网易云提供的后端api进行仿写，采用uni框架实现小程序、web端、h5端多端开发。功能包括排行榜页面、搜索页面、音乐播放页面等功能。</div>
           
          </div>
          <div className="tech">
            <b>技术栈</b>: <br />
            <div className="techcon">基于Vue2 + Uni + vueX开发。</div>
          </div>
          <div className="enter" >
            <a href="http://162.14.65.241/music" target="_blank">
              点击进入
            </a>
          </div>
        </div>
        <Music />
      </div>
      <a className="link" href="" target="_blank">HYW个人网站 | 微信号：huW1999 | 邮箱：huyuwei2tpl@163.com</a>
      <a className="link" href="https://beian.miit.gov.cn/" target="_blank">备案号：蜀ICP备2023000548号-1</a>
    </div>
  );
  
}

export default App;
