const formConfig = {
    pageTitle: "Contact Us | SAF Summit",
    mainTitle: "CONTACT US",
    descText: "Have any inquiries about sponsorship, speaking slots or participation? Fill the form below and we will reply shortly.",
    labels: {
        salute: "Title",
        name: "Name",
        company: "Company",
        job: "Job Title",
        email: "Email",
        mobile: "Mobile",
        notes: "Notes"
    },
    placeholders: {
        name: "Your full name",
        company: "Company Name",
        job: "e.g. Sustainability Director",
        email: "business@company.com",
        mobile: "Country code + number",
        notes: "Write your questions or requirements here..."
    },
    saluteOptions: [
        { value: "", text: "Select" },
        { value: "Mr", text: "Mr." },
        { value: "Ms", text: "Ms." }
    ],
    submitBtnText: "SUBMIT INQUIRY",
    loadingText: "Submitting...",
    submitTip: "We will reply to your email within 2 working days",
    successMsg: "Form submitted successfully! We will contact you soon.",
    failMsg: "Submission failed, please check your information.",
    networkErrMsg: "Network error, please try again later."
};

// 自动填充页面标题、文字、下拉、占位符
document.title = formConfig.pageTitle;
document.querySelector(".contact-main-title").textContent = formConfig.mainTitle;
document.querySelector(".contact-desc-text").textContent = formConfig.descText;

document.querySelector('label[for="salute"]').textContent = formConfig.labels.salute;
document.querySelector('label[for="name"]').textContent = formConfig.labels.name;
document.querySelector('label[for="company"]').textContent = formConfig.labels.company;
document.querySelector('label[for="job"]').textContent = formConfig.labels.job;
document.querySelector('label[for="email"]').textContent = formConfig.labels.email;
document.querySelector('label[for="mobile"]').textContent = formConfig.labels.mobile;
document.querySelector('label[for="notes"]').textContent = formConfig.labels.notes;

document.getElementById("name").placeholder = formConfig.placeholders.name;
document.getElementById("company").placeholder = formConfig.placeholders.company;
document.getElementById("job").placeholder = formConfig.placeholders.job;
document.getElementById("email").placeholder = formConfig.placeholders.email;
document.getElementById("mobile").placeholder = formConfig.placeholders.mobile;
document.getElementById("notes").placeholder = formConfig.placeholders.notes;

const saluteSelect = document.getElementById("salute");
formConfig.saluteOptions.forEach(opt => {
    const option = document.createElement("option");
    option.value = opt.value;
    option.textContent = opt.text;
    saluteSelect.appendChild(option);
});

const submitBtn = document.getElementById("submitBtn");
submitBtn.textContent = formConfig.submitBtnText;
document.querySelector(".submit-tip").textContent = formConfig.submitTip;

// 异步提交表单逻辑
const form = document.getElementById("contactForm");
form.addEventListener("submit", async function (e) {
    e.preventDefault();
    // 防重复提交
    submitBtn.disabled = true;
    submitBtn.textContent = formConfig.loadingText;

    const formData = new FormData(form);
    try {
        const res = await fetch("https://api.staticforms.dev/submit", {
            method: "POST",
            body: formData
        });
        const result = await res.json();
        if (result.success) {
            alert(formConfig.successMsg);
            form.reset();
        } else {
            alert(formConfig.failMsg);
        }
    } catch (err) {
        alert(formConfig.networkErrMsg);
        console.error("Submit error:", err);
    } finally {
        // 恢复按钮状态
        submitBtn.disabled = false;
        submitBtn.textContent = formConfig.submitBtnText;
    }
});
