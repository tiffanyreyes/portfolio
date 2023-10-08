const navbarHTML = `
<nav class="navbar">
    <a href="../index.html">Home</a>
    <a href="../about.html">About</a>
    <a href="../resume.html">Resume</a>
    <a href="../projects.html">Projects</a>
    <a href="../database-diagrams.html">Database Diagrams</a>
    <a href="../api-unit-tests.html">API Unit Tests</a>
    <details class="dropdown">
        <summary class="drop-button">DevOps</summary>
        <div class="dropdown-menu">
            <a href="reyes-tech-value-stream.html" class="presentation-link">Tech Value Stream</a>
            <a href="reyes-two-pizza-rule.html" class="presentation-link">Two Pizza Team Rule</a>  
            <a href="reyes-devops-testing.html" class="presentation-link">DevOps Automated Testing</a>    
            <a href="reyes-continuous-integration.html" class="presentation-link">Continuous Integration</a>
            <a href="reyes-pager-duty-rotation.html" class="presentation-link">Pager Duty Rotation</a>  
            <a href="reyes-change-approval.html" class="presentation-link">Dangers of Change Approval</a> 
            <a href="reyes-it-vs-business.html" class="presentation-link">IT vs Business</a>  
            <a href="reyes-source-control-security.html" class="presentation-link">Source Control Security</a>
            <a href="reyes-change-management.html" class="presentation-link">Change Management of DevOps</a>     
        </div>
    </details>
</nav>
`;

document.getElementById("nav-container").innerHTML = navbarHTML;