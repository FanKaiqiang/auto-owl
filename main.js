var duration = 10
$('.actions').on('click', 'button', function (e) {
    let $button = $(e.currentTarget) // button
    let speed = $button.attr('data-speed')
    $button.addClass('active')
        .siblings('.active').removeClass('active')
    switch (speed) {
        case 'slow':
            duration = 50
            break
        case 'normal':
            duration = 30
            break
        case 'fast':
            duration = 10
            break
    }
})

function writeCode(code) {
    let n = 0
    let domCode = document.querySelector('#code')
    let id = setTimeout(function run() {
        n += 1
        domCode.innerHTML=Prism.highlight(code.substring(0,n),Prism.languages.css)
        styleTag.innerHTML = code.substring(0, n)
        scrollA.scrollTop = scrollA.scrollHeight
        if (n < code.length) {
            id = setTimeout(run, duration)
        }
    }, duration)
}

var result = `/*这次我要徒手用CSS画出一个卡通形象
*就画一个会飞的猫头鹰吧
说干就干，开始动手*/

/*先设定好范围*/
.wrapper {
    width: 200px;
    height: 200px;
    position: relative;
}

/*先画猫头鹰的脸*/
.face {
    position: absolute;
    width: 200px;
    height: 125px;
    background: #64C2DE;
    border-radius: 50%/50%;
    z-index: -2;
}
/*猫头鹰的左眼*/
.leftEye {
    position: absolute;
    width: 110px;
    height: 110px;
    top: 10px;
    background: #98E0F8;
    border-radius: 50%;
}
/*猫头鹰的左耳朵*/
.leftEye::before{
    content: '';
    position: absolute;
    width: 0px;
    height: 0px;
    border: 10px solid;
    border-color: transparent transparent #64C2DE transparent;
    top: -18px;
    left: 36px;
    transform: rotate(-10deg);
}
/*猫头鹰的右眼*/
.rightEye {
    position: absolute;
    width: 110px;
    height: 110px;
    top: 10px;
    right: 0%;
    background: #98E0F8;
    border-radius: 50%;
}
/*猫头鹰的右耳*/
.rightEye::before{
    content: '';
    position: absolute;
    width: 0px;
    height: 0px;
    border: 10px solid;
    border-color: transparent transparent #64C2DE transparent;
    top: -18px;
    right: 36px;
    transform: rotate(10deg);
}
/*再画上猫头鹰的眼睛*/
.innerEye {
    position: absolute;
    width: 90px;
    height: 90px;
    top: 10px;
    left: 10px;
    background: #FFFFFF;
    border-radius: 50px;
    z-index: 1;
}
/*猫头鹰的眼黑*/
.blackEye {
    position: absolute;
    width: 50px;
    height: 50px;
    top: 20px;
    left: 20px;
    background: #000000;
    border-radius: 50%;
    z-index: 2;
}
/*猫头鹰的眼白*/
.whiteEye {
    position: absolute;
    width: 25px;
    height: 25px;
    top: 0;
    right: 0;
    background: #ffffff;
    border-radius: 50%;
    z-index: 3;
}
/*猫头鹰的嘴*/
.mouth {
    position: absolute;
    width: 0;
    height: 0;
    border: 60px solid;
    border-color: #EF8E1B transparent transparent transparent;
    top: 50%;
    left: 20%;
}
/*猫头鹰的下巴*/
.cover {
    position: absolute;
    width: 80px;
    height: 60px;
    background: #98E0F8;
    border-radius: 50%/50%;
    bottom: -10px;
    left: 60px;
    z-index: -1;
}
/*猫头鹰的身子*/
.body {
    position: absolute;
    width: 160px;
    height: 100px;
    background: #98E0F8;
    border-radius: 50%/50%;
    top: 100px;
    left: 20px;
    z-index: -5;
}
/*猫头鹰的左翼*/
.leftWing {
    position: absolute;
    width: 100px;
    height: 50px;
    background: #64C2DE;
    border-radius: 0 50px 0 50px;
    top: -20px;
    left: -80px;
    transform-origin: center right;
    transform: rotate(-96deg);
}
/*猫头鹰的右翼*/
.rightWing {
    position: absolute;
    width: 100px;
    height: 50px;
    background: #64C2DE;
    border-radius: 50px 0 50px 0;
    top: -20px;
    right: -80px;
    transform-origin: center left;
    transform: rotate(96deg);
}
/*猫头鹰肚子上的三个点*/
.belly1 {
    position: absolute;
    width: 0px;
    height: 0px;
    border-left: 7px solid transparent;
    border-top: 12px solid #64C2DE;
    border-right: 7px solid transparent;
    border-bottom: 12px solid transparent;
    top: 40px;
    left: 60px;
}

.belly2 {
    position: absolute;
    width: 0px;
    height: 0px;
    border-left: 7px solid transparent;
    border-top: 12px solid #64C2DE;
    border-right: 7px solid transparent;
    border-bottom: 12px solid transparent;
    top: 40px;
    right: 60px;
}

.belly3 {
    position: absolute;
    width: 0px;
    height: 0px;
    border-left: 7px solid transparent;
    border-top: 12px solid #64C2DE;
    border-right: 7px solid transparent;
    border-bottom: 12px solid transparent;
    top: 60px;
    left: 72px;
}
/*猫头鹰的左足*/
.leftLeg {
    position: absolute;
    bottom: -5px;
    left: 50px;
    width: 6px;
    height: 18px;
    border-radius: 3px / 9px;
    background: #ef8e1b;
    -webkit-transform: rotate(10deg);
}
/*两个脚趾*/
.leftLeg::before {
    position: absolute;
    bottom: 0;
    left: -6px;
    display: block;
    width: 6px;
    height: 18px;
    border-radius: 3px / 9px;
    background: #ef8e1b;
    content: '';
}

.leftLeg::after {
    position: absolute;
    bottom: 0;
    left: 6px;
    display: block;
    width: 6px;
    height: 18px;
    border-radius: 3px / 9px;
    background: #ef8e1b;
    content: '';
}
/*猫头鹰的右足*/
.rightLeg {
    position: absolute;
    bottom: -5px;
    right: 50px;
    width: 6px;
    height: 18px;
    border-radius: 3px / 9px;
    background: #ef8e1b;
    -webkit-transform: rotate(-10deg);
}
/*两个脚趾*/
.rightLeg::before {
    position: absolute;
    bottom: 0;
    right: -6px;
    display: block;
    width: 6px;
    height: 18px;
    border-radius: 3px / 9px;
    background: #ef8e1b;
    content: '';
}

.rightLeg::after {
    position: absolute;
    bottom: 0;
    right: 6px;
    display: block;
    width: 6px;
    height: 18px;
    border-radius: 3px / 9px;
    background: #ef8e1b;
    content: '';
}
/*最后给猫头鹰加上飞行动画*/
/*头的效果*/
@keyframes face{
    0%{
        transform: translateY(0px);
    }
    50%{
        transform: translateY(5px);
    }
    100%{
        transform: translateY(0px);
    }
}

.wrapper>.face{
    animation-name: face;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    transition: all 0.5s;
}
/*翅膀的动画*/
@keyframes wing{
    50%{
        transform: rotate(0deg);
    }
}

.wrapper .leftWing,
.wrapper .rightWing{
    animation-name: wing;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    transition: all 0.5s;
}

/*好了，大鹏振翅飞翔！*/
/*喜欢的话就给我点个赞吧！*/

`
writeCode(result)