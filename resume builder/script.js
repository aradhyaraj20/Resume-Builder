function generateResume() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const skills = document.getElementById('skills').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;

    const resumeHTML = `
        <h3>${fullName}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <hr>

        <h4>Skills</h4>
        <p>${skills.split(',').map(skill => `<span>${skill.trim()}</span>`).join(', ')}</p>
        <hr>

        <h4>Experience</h4>
        <p>${experience.replace(/\n/g, '<br>')}</p>
        <hr>

        <h4>Education</h4>
        <p>${education.replace(/\n/g, '<br>')}</p>
    `;

    document.getElementById('resumeOutput').innerHTML = resumeHTML;
}
