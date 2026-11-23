const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('open');
});
// 点击导航链接自动关闭移动端菜单
document.querySelectorAll('.menu-mobile-inner a').forEach(link=>{
    link.onclick = ()=> mobileMenu.classList.remove('open');
})

