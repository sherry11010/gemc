// 在这里修改你的图片路径数组
// 在这里修改你的图片路径数组
const logoList = [
    "./image/logos/Ministry of Energy and Mineral Resources.png",
    "./image/logos/Directorate General of Civil Aviation (Indonesia).png",
    "./image/logos/PT PLN Energi Primer Indonesia.png",
    "./image/logos/Pertamina New & Renewable Energy.png",
    "./image/logos/PT Perusahaan Gas Negara Tbk.png",
    "./image/logos/PT Pertamina Patra Niaga.png",
    "./image/logos/Indonesian Biogas Association (ABgI).png",
    "./image/logos/PT Unilever Oleochemical Indonesia (UOI).png",
    "./image/logos/PT Pertamina (Persero).png",
    "./image/logos/Boeing.png",
    "./image/logos/Cahaya Power Indonesia (CPI).png",
    "./image/logos/Asia Pulp & Paper (APP).png",
    "./image/logos/KIS Group.png",
    "./image/logos/PT Dharma Satya Nusantara Tbk.png",
    "./image/logos/PT Bumitama Gunajaya Agro (BGA Group).png",
    "./image/logos/PT Sinar Mas Agro Resources and Technology Tbk.png",
    "./image/logos/Asian Agri.png",
    "./image/logos/Indonesian Pulp and Paper Association (IPPA).png",
    "./image/logos/Indonesian International Biochar Association (ABII).png",
    "./image/logos/Palm Kernel Shell Entrepreneur Association of Indonesia.png",
    "./image/logos/the Indonesian Biomass Energy Producers Association.png",
    "./image/logos/CM Biomass.png",
    "./image/logos/Apical Group.png",
    "./image/logos/PT Perkebunan Nusantara (PTPN).png",
    "./image/logos/PT. Wilmar Cahaya Indonesia.png",
    "./image/logos/Monsoon Carbon Pte Ltd.jpg",
    "./image/logos/Tunas Sawa Erma (TSE) Group.jpg",
    "./image/logos/PT TERRA BARU INDONESIA.jpg",
    "./image/logos/PT Bhetochar Energi Nusantara.jpg",
    "./image/logos/Shammah Co., Ltd.jpg",
    "./image/logos/3Degrees (APAC).jpg",
    "./image/logos/PT Indika Indonesia Resources.jpg",
    "./image/logos/APRIL Group.jpg",
    "./image/logos/SOLCOFIN Group.jpg",
    "./image/logos/HySights.jpg",
    "./image/logos/Seaga Corporation.jpg",
];


const imgElements = document.querySelectorAll('.partner-img');
let index = 0;
const showCount = imgElements.length; // 一共8个格子

function renderLogos() {
    imgElements.forEach((img, i) => {
        const pos = (index + i) % logoList.length;
        img.src = logoList[pos];
    });
}

// 初始化
renderLogos();
// 轮播切换，3秒一轮
setInterval(() => {
    index++;
    renderLogos();
}, 3000);
