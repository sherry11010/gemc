document.addEventListener('DOMContentLoaded', function () {
    const certList = [
        "./image/certificates/BBBSAF-2026-PN-10290010.png",
        "./image/certificates/BBBSAF-2026-PN-10290011.png",
        "./image/certificates/BBBSAF-2026-PN-10290012.png",
        "./image/certificates/BBBSAF-2026-PNL-10280013.png",
        "./image/certificates/BBBSAF-2026-PNL-10280014.png",
        "./image/certificates/BBBSAF-2026-PNL-10280015.png",
        "./image/certificates/BBBSAF-2026-PNL-10280016.png",
        "./image/certificates/BBBSAF-2026-PNL-10280017.png",
        "./image/certificates/BBBSAF-2026-PNL-10280018.png",
        "./image/certificates/BBBSAF-2026-SPK-10280001.png",
        "./image/certificates/BBBSAF-2026-SPK-10280002.png",
        "./image/certificates/BBBSAF-2026-SPK-10280003.png",
        "./image/certificates/BBBSAF-2026-SPK-10280004.png",
        "./image/certificates/BBBSAF-2026-SPK-10280005.png",
        "./image/certificates/BBBSAF-2026-SPK-10280006.png",
        "./image/certificates/BBBSAF-2026-SPK-10280007.png",
        "./image/certificates/BBBSAF-2026-SPK-10280008.png",
        "./image/certificates/BBBSAF-2026-SPK-10280009.png",
        "./image/certificates/BBBSAF-2026-SPK-10280010.png",
        "./image/certificates/BBBSAF-2026-SPK-10280011.png",
        "./image/certificates/BBBSAF-2026-SPK-10280012.png",
        "./image/certificates/BBBSAF-2026-SPK-10290001.png",
        "./image/certificates/BBBSAF-2026-SPK-10290002.png",
        "./image/certificates/BBBSAF-2026-SPK-10290003.png",
        "./image/certificates/BBBSAF-2026-SPK-10290004.png",
        "./image/certificates/BBBSAF-2026-SPK-10290005.png",
        "./image/certificates/BBBSAF-2026-SPK-10290006.png",
        "./image/certificates/BBBSAF-2026-SPK-10290007.png",
        "./image/certificates/BBBSAF-2026-SPK-10290008.png",
        "./image/certificates/BBBSAF-2026-SPK-10290009.png",
        "./image/certificates/BBBSAF-2026-SPK-10290010.png"

    ];

    // 改成 certImgList，不和logo脚本的imgElements重名
    const certImgList = document.querySelectorAll('.cert-img');
    const showNum = 4; // 一次展示4张
    let certIndex = 0;

    function renderCertificates() {
        certImgList.forEach((img, i) => {
            const realIndex = (certIndex + i) % certList.length;
            img.classList.remove('active');
            setTimeout(() => {
                img.src = certList[realIndex];
                img.classList.add('active');
            }, 150);
        });
        certIndex = (certIndex + certIndex + showNum) % certList.length;
    }

    renderCertificates();
    setInterval(renderCertificates, 4000);
});
