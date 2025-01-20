// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my research projects and computational biology portfolios.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-publications",
              title: "publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-projects",
              title: "projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-มิสหอบหืด-miss-asthma-thailand",
      
        title: 'มิสหอบหืด - MISS ASTHMA THAILAND <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://missasthmath.blogspot.com/", "_blank");
        
      },
    },{id: "post-ยาหอบหืดแบบฉีด-omalizumab",
      
        title: 'ยาหอบหืดแบบฉีด: Omalizumab <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "ยาหอบหืดแบบฉีด Omalizumabยาเข็มละ 20,000 แต่บางคนต้องฉีด 8 เข็ม = 80,000 บาทต่อเดือน.เท่าที่มิสถามหลายๆคนจากโพสก่อนหน้าหลายคนได้ใช้ยามุ่งเป้าสำหรับโรคหืดซึ่งส่วนใหญ่คือตัวนี้!!.ยานี้ชื่อสามัญคือ Omalizumab (โอมาริซูแมป)ชื่อทางการค้า Xolair® (โซแล)(งงมั้ยว่าทำไมยาเดียวมี 2 ชื่อ).ยานี้สำหรับคนไข้โรคหืดแบบขี้แพ้คือแพ้เยอะอ่ะ หมอจะต้องตรวจเลือดดูค่าภูมิแพ้ที่ชื่อ total IgE (ค่าไอจีชนิดอีทั้งหมด)ปล.ค่าภูมิแพ้มีหลายตัวมากกกกก.การใช้ยาว่าทำไมคนนี้ฉีด 1 เข็มแต่อีกคนปาไป 4 เข็มจะคำนวณจาก1. ค่าภูมิแพ้ total IgE 2. น้ำหนักตัว!!! .แพ้มาก อ้วนมากยิ่งแพงนะทุกคน.มิสเคยตรวจค่าภูมิแพ้ total IgE ตัวนี้พบว่าถ้าเลี่ยงสิ่งที่แพ้นะค่า total IgE มิสลดด้วยแหละ.เพราะงั้นอย่างนึงที่คนไข้ทำได้คือ1. เลี่ยงสิ่งที่ทำให้เราแพ้2. ลดน้ำหนัก.น้ำหนักเนี่ยมีผลต่อโรคหอบด้วยนะอ้วนก็ทำให้หอบเพิ่มขึ้นได้ด้วย .เพราะยามุ่งเป้าพวกนี้ราคาแพงมากกกกไม่ใช่ทุกคนที่จะจ่ายไหว/เบิกได้.โพสต่อๆมิสจะมาบอกข่าวดีเราอาจจะได้ใช้ยา omalizumab นี้ในราคาที่ถูกลง .อ้างอิงขนาดยา Xolair : https://www.xolairhcp.com/.../dosing-and.../dosing.htmlมาคุยกันได้ที่Facebook: มิสหอบหืด - Miss Asthma Thailand #หอบหืด #มิสหอบหืด #MissAsthma #MissAsthmaThailand",
      section: "Posts",
      handler: () => {
        
          window.open("https://missasthmath.blogspot.com/2025/01/omalizumab.html", "_blank");
        
      },
    },{id: "post-ตอนที่-1-คุณหมอดูแลเรายังไงแล้วเราดูแลตัวเองยังไงดี",
      
        title: 'ตอนที่ 1: คุณหมอดูแลเรายังไงแล้วเราดูแลตัวเองยังไงดี <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "ซีรี่แกะรอยวิธีคุมโรคหืดตามหนังสือของคุณหมอ ตอนที่ 1 คุณหมอดูแลเรายังไงแล้วเราดูแลตัวเองยังไงดีน๊าาาา .วันโรคหืดปีนี้เค้าเน้นเรื่องข้อมูลมากกกกอยากให้คนไข้โรคหอบหืดได้รับข้อมูลดีดีไว้ดูแลตัวเองกัน.มิสก็เลยขโมยข้อมูลในวงการคุณหมอมาให้คนไข้อย่างเราๆได้ดูกันนี่บุกหลังบ้านหมอฝุดๆ .คุณหมอดูแลเรายังไง ดูแลตัวเองยังไงได้บ้าง.ภาพนี้จะบอกเรื่องราวทั้งหมดดดดที่มิสจะเล่าทั้งซีรี่ ซึ่งคงจะยาวมากกกกกกกกก.คุณหมอดูเเลเราตาม 3 ส่วนใหญ่ๆคือป - ประเมินท - ทบวนป - ปรับ.ซึ่งแต่ละอันหัวข้อแยกย่อยเยอะมากๆเลยหล่ะ.แต่ส่วนที่เราดูแลตัวเองได้ และจะช่วยให้คุณหมอดุแลเราง่ายขึ้นไปด้วยก็คือเกือบทั้งหมดเช่นกันมิสได้แปะรูปสวยๆของมิสพร้อมขีดเส้นแดงๆไว้ให้แล้วเกือบทั้งหมดเลยจริงๆใช่มั้ยหล่ะ.ตอนหน้าอยากรู้ข้อมูลเส้นสีแดงเส้นไหนดีช่วยมิสโหวตกันหน่อยคอมเม้นไว้เล๊ยยยย.อ้างอิงภาพ- Guideline for adult asthma management in Thailand 2022 by Thai Asthma Councilมาคุยกันได้ที่Facebook: มิสหอบหืด - Miss Asthma Thailand#Asthma#WorldAsthmaDay#worldasthmaday2024#หอบหืด #มิสหอบหืด#MissAsthma #MissAsthmaThailand#คนไข้บ้าพลัง #ทีมหอบหื่น",
      section: "Posts",
      handler: () => {
        
          window.open("https://missasthmath.blogspot.com/2025/01/blog-post.html", "_blank");
        
      },
    },{id: "post-screen-command-to-maintain-terminal-screen-unix-trick",
      
        title: "Screen command to Maintain Terminal Screen - [Unix trick]",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/CompUnix1_Screen/";
        
      },
    },{id: "post-tracking-verions-of-code-by-git-version-control-proj-my-computer-workbench",
      
        title: "Tracking verions of code by Git Version Control - [Proj:My Computer Workbench]",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Comp5_Git/";
        
      },
    },{id: "post-popular-computational-biology-language-with-r-proj-my-computer-workbench",
      
        title: "Popular Computational Biology Language with R - [Proj:My Computer Workbench]",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Comp4_R/";
        
      },
    },{id: "post-reproducible-computational-biology-workflow-by-nf-core-proj-my-computer-workbench",
      
        title: "Reproducible Computational Biology Workflow by nf-core - [Proj:My Computer Workbench]",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Comp3_nf/";
        
      },
    },{id: "post-containerization-using-docker-proj-my-computer-workbench",
      
        title: "Containerization using Docker - [Proj:My Computer Workbench]",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Comp2_Docker/";
        
      },
    },{id: "post-operating-system-using-linux-proj-my-computer-workbench",
      
        title: "Operating System using Linux - [Proj:My Computer Workbench]",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Comp1_OS/";
        
      },
    },{id: "post-what-are-go-msigdb-kegg-ora-and-gsea",
      
        title: "What are GO, MSigDB, KEGG, ORA, and GSEA?",
      
      description: "What are those terms in transcriptomics analysis?",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/msigDB_ORA_GSEA/";
        
      },
    },{id: "news-my-combio-portfolio-my-computer-workbench-format-changes-smile-easy-to-read",
          title: 'My ComBio Portfolio: My Computer Workbench  format changes :smile: easy to read!',
          description: "",
          section: "News",},{id: "news-my-combio-portfolio-transcriptome-is-recently-updated-sparkles-sparkles",
          title: 'My ComBio Portfolio: Transcriptome  is recently updated :sparkles: :sparkles:',
          description: "",
          section: "News",},{id: "projects-cholangiocarcinoma-stem-cell",
          title: 'Cholangiocarcinoma Stem Cell',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/CSC/";
            },},{id: "projects-computer-workbench-setting",
          title: 'Computer Workbench Setting',
          description: "How my computers are set up with reproducibility in mind.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ComSetting/";
            },},{id: "projects-transcriptomics",
          title: 'Transcriptomics',
          description: "My transcriptomics portfolio :)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Transcriptome/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%6B%72%69%74%74%69%79%61%62%68%6F%72%6E@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-facebook',
        title: 'Facebook',
        section: 'Socials',
        handler: () => {
          window.open("https://facebook.com/kuchiki.namthip", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/KuchikiNamthip", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kuchikinamthip", "_blank");
        },
      },{
        id: 'social-medium',
        title: 'Medium',
        section: 'Socials',
        handler: () => {
          window.open("https://medium.com/@kuchikinamthip", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0009-9689-2552", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Krittiyabhorn-Kongtanawanich/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=https://scholar.google.co.th/citations?user=afWylV4AAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://www.sisyspharm.org/", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/KuchikiNamthip", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
