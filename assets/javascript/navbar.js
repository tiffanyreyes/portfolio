const navbarHTML = `
<nav class="navbar">
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="resume.html">Resume</a>
    <a href="projects.html">Projects</a>
    <a href="database-diagrams.html">Database Diagrams</a>
    <a href="api-unit-tests.html">API Unit Tests</a>
    <details class="dropdown">
        <summary class="drop-button">DevOps</summary>
        <div class="dropdown-menu">
            <a href="web-430/reyes-tech-value-stream.html" class="presentation-link">Tech Value Stream</a>
            <a href="web-430/reyes-two-pizza-rule.html" class="presentation-link">Two Pizza Team Rule</a>  
            <a href="web-430/reyes-devops-testing.html" class="presentation-link">DevOps Automated Testing</a>
            <a href="web-430/reyes-continuous-integration.html" class="presentation-link">Continuous Integration</a> 
            <a href="web-430/reyes-pager-duty-rotation.html" class="presentation-link">Pager Duty Rotation</a>
            <a href="web-430/reyes-change-approval.html" class="presentation-link">Dangers of Change Approval</a> 
            <a href="web-430/reyes-it-vs-business.html" class="presentation-link">IT vs Business</a>
            <a href="web-430/reyes-source-control-security.html" class="presentation-link">Source Control Security</a>
        </div>
    </details>
</nav>
`;

document.getElementById("nav-container").innerHTML = navbarHTML;