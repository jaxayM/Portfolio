<template>

<div class="main" id = "site">

	<header class="intro">
		<h2 class="intro_tagline font-general-semibold">
			<div class="">
   <section class="sec">
     <br><br><br><br><br>
   <div class=" sm:text-left float-left w-full text-left">
    Hello I Am
			<div class="myname">Zakariae Hayani</div>
			 <div>A Design-minded:</div>
			</div>
   </section>
   <div class="w-max text-right float-left mytext">
				<div class="content">
					<div class="container">
						<ul class="list">
							<li class="item">Data Analyst.</li>
							<li class="item">Financial Engineer.</li>
							<li class="item">Full Stack Developer.</li>
						</ul>
					</div>
				</div>
			</div>
   </div>
			<span class="text-left float-left text-ternary-dark dark:text-primary-light">Worked on developing and designing products for the web, by using knowledge of finance and data science, creating simple landing pages to designing complete data-centric applications.</span>
  </h2>
		<h3 class="intro_contact">
			<span>Take a look at my latest project </span>
			<span class="emoji pointer"></span>
			<span id="emailme">
				<router-link to="/app" class="highlight-link cursor-not-allowed">VueJs Memo App</router-link>
			</span>
		</h3>
	</header>
</div>

</template>

<style scoped>

.main  {
  margin: 0;
  padding: 0;
  background-color: #fff;
  color: #444452;
  line-height: 1.5;
  scroll-behavior: smooth;
  font-family: 'Helvetica', monospace; /* 'Share Tech Mono' */
  }
  
h1 {
    display: block;
    font-size: 2em;
    -webkit-margin-before: 0.67em;
    -webkit-margin-after: 0.67em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
}

  
h2 {
    display: block;
    font-size: 1.2em;
    -webkit-margin-before: 0.83em;
    -webkit-margin-after: 0.83em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
}

h3 {
    display: block;
    font-size: 1.17em;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
}

main p {
    font-weight: 200;
}

section.fadeIn{
    animation: fadeIn 2s forwards;
}
  
.intro {
    position: absolute;
/*  margin-top: 100px;*/
    top: 100px;
}
.mytext{
    height: 100px;
  }
  
.conteneur {
  padding-top: 100px;
}
  
.switch-wrapper{
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-pack: center;
                    -ms-flex-pack: center;
                    justify-content: center;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    position: fixed;
                    top: 20px;
                    right: 30px;
                }

.switch-wrapper .moon, .switch-wrapper .sun {
                        width: 17px;
                        height: 17px;
                    }

.switch-wrapper .toggle-wrapper {
                        margin: 10px;
                    }

.switch-wrapper .toggle-wrapper #switch {
                        height: 0;
                        width: 0;
                        visibility: hidden;
                        position: absolute;
                    }

.switch-wrapper .toggle-wrapper input[type=checkbox] {
                        height: 0;
                        width: 0;
                        visibility: hidden;
                    }

.switch-wrapper .toggle-wrapper label {
                        cursor: pointer;
                        text-indent: -9999px;
                        width: 45px;
                        height: 25px;
                        background: grey;
                        display: block;
                        border-radius: 100px;
                        position: relative;
                    }

.switch-wrapper .toggle-wrapper label:after {
                        content: '';
                        position: absolute;
                        left: 2px;
                        top :1px;
                        width: 20px;
                        height: 22px;
                        background: #fff;
                        border-radius: 40px;
                        transition: 0.3s;
                    }

.switch-wrapper .toggle-wrapper input:checked + label {
                        background: #bada55;
                    }

.switch-wrapper .toggle-wrapper input:checked + label:after {
                        left: calc(100% - 2px);
                        transform: translateX(-100%);
                    }

.switch-wrapper .toggle-wrapper label:active:after {
                        width: 0px;
                    }

.switch-wrapper a, body.night .switch-wrapper a {
    color: #007bff;
    margin: 15px;
}

.txt-rotate {
    color: #FFCB04;
    font-weight: bold;
}
.myname {
      color: aliceblue;
      text-transform: uppercase;
      letter-spacing: 2px;
      text-decoration: none;
      text-fill-color: transparent;
      display: inline-block;
      background-image: linear-gradient(to right, #30CFD0 0%, #330867 100%);
      animation: .8s shake infinite alternate;
}
  
.name{
    font-weight: bolder;
}
.content {
    position: relative;
    top: 37%;
    overflow:hidden;
    font-size: 30px;
    line-height: 50px;
    color: #FFCB04;
}
  
  
.content .container {
    font-weight: 600;
    overflow: hidden;
    height: 55px;
    padding: 0px 40px;
    width: 100%;
}
.container:before {
      content: '[';
      left: 0;
    }

.container:after {   
      content: ']';
      position: absolute;
      right: 0;
    }
  
.container:after, .container:before {
    position: absolute;
    top: 0px;
    color: #007bff;
    font-size: 50px;
    animation-name: opacity1;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}

.list {
    margin-top: 0px;
    margin-bottom: 60px;
    text-align: left;
    line-height:80px;
    list-style: none;
    animation-name: change;
    animation-duration: 10s;
    animation-iteration-count: infinite;
}

.item {
    line-height: 50px;
    margin-bottom: 0px;
}
.intro {
        padding: 80px 100px;
        height: 75vh;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        max-width: 1440px;
        margin: 0 auto;
}   
.intro_hello {
    font-weight: 300;   
}

.intro_hello, .intro_tagline {
    font-size: 2.1rem;
}
    
  
.intro_tagline {
    font-weight: 300;
    max-width: 700px;   
}

.intro__tagline .name {
    font-weight: 700;
}
.intro_tagline .emoji {
    width: 40px;
    height: 40px;
}
  
.intro_contact {
    font-size: 1.25rem;
    font-weight: 100;
}

.intro_contact .emoji.pointer {
/*    background-image: url(images/right-pointing.png);*/
    width: 30px;
    height: 30px;
    margin: 0 5px;
    vertical-align: text-bottom;
}

.intro_contact .highlight-link {
    font-weight: 400;
    text-decoration: none;
    display: inline-block;
    padding: 2px 3px;
    transition: all .2s ease-in-out;
    text-decoration: none;
    box-shadow: inset 0 -3px 0 #007bff;
}

.intro_contact .highlight-link:hover {
    box-shadow: inset 0 -33px 0 0 #007bff;
    color: #fff;
}

  
.main ul {
    list-style: none;
    padding: 0;
}


/*All Keyframes*/
@keyframes wave{
    0% {transform: rotate(0deg);}
    /*10%{transform: rotate(90deg);}*/
    20% {transform: rotate(90deg);}  
    /*30%{transform: rotate(90deg);}*/
    40% {transform: rotate(15deg);}
    /*50% {transform: rotate(90deg);}*/
    60% {transform: rotate(90deg);}
    /*70%{transform: rotate(90deg);}*/
    80%{transform: rotate(15deg);}
    /*90% {transform: rotate(90deg);}*/
    100% {transform: rotate(0deg);}
}


@keyframes pulsate {
      0% {
        transform: scale(0.1, 0.1);
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: scale(1.2, 1.2);
        opacity: 0;
      }
    }


@keyframes fadeIn {
  /* keyframes must have at least two intervals from/to or 0%/100% */
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes shake {
  0% { transform: skewX(-15deg); }
  5% { transform: skewX(15deg); }
  10% { transform: skewX(-15deg); }
  15% { transform: skewX(15deg); }
  20% { transform: skewX(0deg); }
  100% { transform: skewX(0deg); }  
}


@keyframes opacity1 {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}


@keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-35%,0);}
  33.32%,45.98% {transform:translate3d(0,-68%,0);}
  49.98%,62.64% {transform:translate3d(0,-70%,0);}
  66.64%,79.3% {transform:translate3d(0,-37%,0);}
  83.3%,95.96% {transform:translate3d(0,-0%,0);}
}
  
/*All Media Queries*/

@media screen and (max-width: 320px)
{
   
    .intro_hello, .intro_tagline {
        font-size: 1.4rem;
    }
    body .intro {
            padding: 130px 45px; 
        }

  }
  


@media screen and (max-width: 425px){
    .switch-wrapper{
            top: 10px;
            right: 20px;
        }
    body .intro{
            padding: 100px 35px;
            line-height: 1.5;
        }

     .intro_hello, .intro_tagline{
        margin-bottom: 5%;
        font-size: 1.75rem;
    }

    body section, html section {
            padding: 80px 55px;

        }
    body .section_content, html .section_content {
        padding-left: 30px;
    }

    .content{
        /*position: absolute;*/
      top: 36%;
      left: 5%;
      font-size: 1.5rem;
    }

    .content .container {
        padding: 0px 30px 0px 30px;
    }

    body #top-button, html #top-button {
        bottom: 15px;
        right: 3px;
    }

    .status_message{
        font-size: 1rem;
    }
}

@media screen and (max-width: 550px){


     .content {
      top: 41.5%;
      left: 5%;
      font-size: 1.5rem;
    }

}


@media screen and (max-width: 768px){
    
    body .section, html .section {
        display: block;
    }
    body .section_title, html .section_title {
        text-align: left;
        width: auto;
    }
    body .section_content, html .section_content {
        padding-top: 30px;
        padding-left: 50px;
    }
    .featured-projects .project {
        width: 100%;
        display: block;
        margin-bottom: 30px;
    }
    .featured-projects .project_caption {
        width: 100%;
        margin-top: 25px;
        margin-left: 0;
    }
    .switch-wrapper a, body.night .switch-wrapper a {
        margin: 5px;
        font-size: 8px;
    }
}


@media screen and (max-width: 1024px){
   
    body .section, html .section {
        padding: 50px;
    }
    body .section_title, html .section_title  {
        margin-right: 50px;
    }
    body #top-button, html #top-button {
        bottom: 20px;
        right: 7px;
        width: 35px;
    }
}


@media screen and (max-width: 1280px){
    body .section, html .section {    
        margin-right: 20px;
        margin-left: 0px;
        padding-left: 20px;
    }
    body .intro {
            padding: 100px 35px;
            line-height: 1.5;
        }
}
</style>