SystemUtil.Run "msedge.exe", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
Browser("OrangeHRM").Page("OrangeHRM").WebEdit("username").Set "Admin"
Browser("OrangeHRM").Page("OrangeHRM").WebEdit("password").Set "admin123"
Browser("OrangeHRM").Page("OrangeHRM").WebButton("Login").Click

Browser("OrangeHRM").Page("OrangeHRM_2").WebElement("Dashboard").CheckProperty "visible", true 

