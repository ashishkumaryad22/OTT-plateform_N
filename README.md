# OTT-platform
ott platform development using angular material

### Challenge

develop an OTT application – ViewTube. ​

To attract good viewership the application should provide rich user experience.​

Google has provided with Material as the language of design that helps to develop applications with high-quality design.​

The application should attract both the different types of users:​
1. One set of users who are all keen on viewing the videos over this OTT platform.​
2. The second set of users who are interested in creating and publishing their own videos or even schedule live events over this OTT platform.​

### Problem – ViewTube Phase - 1​

In the first version, the landing view of the application should be rendered with video cards with brief description, number of views, duration since it was published and the length of video.​

The application should have header with search box, links with icons and tooltips, and collapsible sidebar with navigation links with icons.​

### Problem – ViewTube Phase - 2​

1. Create studio-livestream component
2. Web Page should have a title in the header and side nav-bar (with menu item to schedule livestream) created using schematics
3. For scheduling a live stream event, following are the form fields required:
    - Livestream Event Title(Mandatory, Max Length:100)
    - Event start date (Mandatory)
    - Event start time (Mandatory, Drop down)
    - Event end date (Mandatory)
    - Event end time (Mandatory, Drop down)
    - Event details 
    - Guest List 
4. Built-in Validators should be used for form fields appropriately

### Problem – ViewTube Phase - 3​

1. Create studio-upload component
2. Web page should have a title in the header and side nav-bar (with menu item to upload) created using schematics
3. Video upload form fields should contain
    - Video url (Mandatory, Valid URL pattern)
    - Video Title (Mandatory, Max length:120)
    - video Description
    - Video Duration (Mandatory, valid duration pattern)
    - Channel Title (Mandatory)
    - Audience Type (Radio Button)
        - Yes,its made for Kids
        - Not for kids
    - Age Restriction  (Radio Button)
        - Yes, Restrict my videos to viewers over 18
        - No, don't restrict my videos to viewers over 18  
    - Tags (Chip list)
    - Recording Date
    - Video Location (Drop down for places) 
    - License (Drop Down)
        - Standard Viewtube License
        - Creative Common License
    - Distribution (Drop down)
        - Everywhere
        - Make this video available only on monetized platforms
    - Video Category (Drop down)
        - Film & Animation
        - Autos & Vehicles
        - Music
        - Pets & Animals
        - Sports
        - Travel & Events
        - Gaming
        - People & Blogs
        - Comedy
        - Entertainment
        - News & Politics
        - Howto & Style
        - Education
        - Science & Technology
        - Nonprofits & Activism 
    - Visibility (Mandatory)
        - private
        - public
4. Built-in Validators should be used for form fields appropriately
6. On clicking the save button, valid form should be submitted and a toast message stating that "Your video has been uploaded successfully" should be displayed
