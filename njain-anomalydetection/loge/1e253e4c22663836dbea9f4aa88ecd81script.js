
                        /***********************************************************************************
*	(c) Ger Versluis 1500 version 5.411 24 December 1501 (updated Jan 31st, 1503 by Dynamic Drive for Opera7)
*	For info write to menus@burmees.nl		          *
*	You may remove all comments for faster loading	          *		
***********************************************************************************/

	var NoOffFirstLineMenus=20;			// Number of first level items
	var LowBgColor='white';			// Background color when mouse is not over
	var LowSubBgColor='#66af5c';			// Background color when mouse is not over on subs
	var HighBgColor='#ff9600';			// Background color when mouse is over
	var HighSubBgColor='#ff9600';			// Background color when mouse is over on subs
	var FontLowColor='black';			// Font color when mouse is not over
	var FontSubLowColor='white';			// Font color subs when mouse is not over
	var FontHighColor='white';			// Font color when mouse is over
	var FontSubHighColor='white';			// Font color subs when mouse is over
	var BorderColor='black';			// Border color
	var BorderSubColor='black';			// Border color for subs
	var BorderWidth=0;				// Border width
	var BorderBtwnElmnts=0;			// Border between elements 1 or 0
	var FontFamily="verdana,arial,comic sans ms,technical"	// Font family menu items
	var FontSize=8;				// Font size menu items
	var FontBold=0;				// Bold menu items 1 or 0
	var FontItalic=0;				// Italic menu items 1 or 0
	var MenuTextCentered='left';			// Item text position 'left', 'center' or 'right'
	var MenuCentered='left';			// Menu horizontal position 'left', 'center' or 'right'
	var MenuVerticalCentered='top';		// Menu vertical position 'top', 'middle','bottom' or static
	var ChildOverlap=.01;				// horizontal overlap child/ parent
	var ChildVerticalOverlap=.01;			// vertical overlap child/ parent
	var StartTop=1;				// Menu offset x coordinate
	var StartLeft=15;				// Menu offset y coordinate
	var VerCorrect=0;				// Multiple frames y correction
	var HorCorrect=0;				// Multiple frames x correction
	var LeftPaddng=2;				// Left padding
	var TopPaddng=1;				// Top padding
	var FirstLineHorizontal=0;			// SET TO 1 FOR HORIZONTAL MENU, 0 FOR VERTICAL
	var MenuFramesVertical=1;			// Frames in cols or rows 1 or 0
	var DissapearDelay=1000;			// delay before menu folds in
	var TakeOverBgColor=1;			// Menu frame takes over background color subitem frame
	var FirstLineFrame='navig';			// Frame where first level appears
	var SecLineFrame='space';			// Frame where sub levels appear
	var DocTargetFrame='space';			// Frame where target documents appear
	var TargetLoc='MenuPos';				// span id for relative positioning
	var HideTop=0;				// Hide first level when loading new document 1 or 0
	var MenuWrap=1;				// enables/ disables menu wrap 1 or 0
	var RightToLeft=0;				// enables/ disables right to left unfold 1 or 0
	var UnfoldsOnClick=0;			// Level 1 unfolds onclick/ onmouseover
	var WebMasterCheck=0;			// menu tree checking on or off 1 or 0
	var ShowArrow=0;				// Uses arrow gifs when 1
	var KeepHilite=1;				// Keep selected path highligthed
	var Arrws=['images/tri.gif',5,10,'tridown.gif',10,5,'trileft.gif',5,10];	// Arrow source, width and height

function BeforeStart(){return}
function AfterBuild(){return}
function BeforeFirstOpen(){return}
function AfterCloseAll(){return}


// Menu tree
//	MenuX=new Array(Text to show, Link, background image (optional), number of sub elements, height, width);
//	For rollover images set "Text to show" to:  "rollover:Image1.jpg:Image2.jpg"
//	for new window //javascript:window.open('http://www.iitk.ac.in')

Menu1=new Array("Institute","http://www.iitk.ac.in/infocell/iitk/newhtml/institute.htm","",10,16,150);
		Menu1_1=new Array("History","http://www.iitk.ac.in/infocell/iitk/newhtml/history.htm","",1,16,150);
			Menu1_1_1=new Array("IITK Saga","http://www.iitk.ac.in/infocell/iitk/newhtml/iitksaga.htm","",0,16,150);
		Menu1_2=new Array("Acts and Statutes","http://www.iitk.ac.in/infocell/iitk/newhtml/a&s.htm","",0,16,150);
		Menu1_3=new Array("Board of Governors","http://www.iitk.ac.in/infocell/iitk/newhtml/bogoverns.htm","",0,16,150);
		Menu1_4=new Array("Finance Committee","http://www.iitk.ac.in/infocell/iitk/newhtml/financecomm.htm","",0,16,150);
		Menu1_5=new Array("Building & Works Committee","http://www.iitk.ac.in/infocell/iitk/newhtml/bwcomm.htm","",0,16,150);
		Menu1_6=new Array("Grievance Committee","http://www.iitk.ac.in/infocell/iitk/newhtml/grievancecomm.htm","",0,16,150);
		Menu1_7=new Array("Administration","","",4,16,150);
			Menu1_7_1=new Array("Key Administrators","http://www.iitk.ac.in/infocell/iitk/newhtml/kadmins.htm","",0,16,150);
			Menu1_7_2=new Array("Directorate","http://www.iitk.ac.in/infocell/iitk/newhtml/directorate.htm","",0,16,150);
			Menu1_7_3=new Array("Registrar Office","http://www.iitk.ac.in/infocell/iitk/newhtml/registrar.htm","",0,16,150);
			Menu1_7_4=new Array("Administration Office","http://www.iitk.ac.in/infocell/iitk/newhtml/administration.htm","",0,16,150);
		Menu1_8=new Array("IIT Review Report","http://www.iitk.ac.in/infocell/iitk/newhtml/reviewcom.htm","",0,16,150);
		Menu1_9=new Array("Campus","http://www.iitk.ac.in/infocell/iitk/newhtml/campus.htm","",0,16,150);
		Menu1_10=new Array("IITK Logo","http://www.iitk.ac.in/infocell/iitk/newhtml/iitklogo.htm","",0,16,150);
	
	Menu2=new Array("Departments","http://www.iitk.ac.in/infocell/iitk/newhtml/landingpages/departments.htm","",5,16,150);
	Menu2_1=new Array("Engineering","","",9,16,150);	
		Menu2_1_1=new Array("Aerospace Engineering","javascript:window.open('http://www.iitk.ac.in/aero/')","",0,16,220); 
		Menu2_1_2=new Array("Biological Sciences & Bioengineering","javascript:window.open('http://www.iitk.ac.in/bsbe/')","",0,16,150);
		Menu2_1_3=new Array("Chemical Engineering","http://www.iitk.ac.in/che/","",0,16,150);
        Menu2_1_4=new Array("Civil Engineering","javascript:window.open('http://www.iitk.ac.in/ce/')","",0,16,150);
        Menu2_1_5=new Array("Computer Science & Engineering","javascript:window.open('http://www.cse.iitk.ac.in/')","",0,16,150);
		Menu2_1_6=new Array("Electrical Engineering","javascript:window.open('http://www.iitk.ac.in/ee/')","",0,16,150);
		Menu2_1_7=new Array("Industrial & Management Engineering","http://www.iitk.ac.in/ime/","",0,16,150);
		Menu2_1_8=new Array("Materials Science & Engineering","javascript:window.open('http://www.iitk.ac.in/mme/')","",0,16,150);
		Menu2_1_9=new Array("Mechanical Engineering","javascript:window.open('http://www.iitk.ac.in/me/')","",0,16,150);
						  
	Menu2_2=new Array("Humanities","","",1,16,150);
		Menu2_2_1=new Array("Humanities & Social Sciences","javascript:window.open('http://www.iitk.ac.in/hss/')","",0,16,180);
		
	Menu2_3=new Array("Management","","",1,16,150);
		Menu2_3_1=new Array("Industrial & Management Engineering","javascript:window.open('http://www.iitk.ac.in/ime/')","",0,16,220);
		
	Menu2_4=new Array("Sciences","","",3,16,150);
		Menu2_4_1=new Array("Chemistry","javascript:window.open('http://www.iitk.ac.in/chm/')","",0,16,150); 
		Menu2_4_2=new Array("Mathematics & Statistics","javascript:window.open('http://www.iitk.ac.in/math/')","",0);
		Menu2_4_3=new Array("Physics","javascript:window.open('http://www.iitk.ac.in/phy/')","",0);
		
	Menu2_5=new Array("Inter Disciplinary Programmes","","",5,16,150);  
		Menu2_5_1=new Array("Environmental Engineering & Management","javascript:window.open('http://www.iitk.ac.in/eem/')","",0,16,260);
		Menu2_5_2=new Array("Laser Technology","javascript:window.open('http://www.iitk.ac.in/celt/')","",0,16,150);
		Menu2_5_3=new Array("Master of Design","javascript:window.open('http://www.iitk.ac.in/design/')","",0,16,150);
		Menu2_5_4=new Array("Materials Science Programme","javascript:window.open('http://www.iitk.ac.in/msp/')","",0,16,150);
		Menu2_5_5=new Array("Nuclear Engineering & Technology","javascript:window.open('http://www.iitk.ac.in/net/')","",0,16,150);

Menu3=new Array("Centres & Facilities","","",4,16,150);
	Menu3_1=new Array("Centres","","",10,16,200);
		Menu3_1_1=new Array("Advanced Centre for Material Science(ACMS)","javascript:window.open('http://www.iitk.ac.in/acms/')","",0,16,400);
		Menu3_1_2=new Array("Advanced Centre for Electronic Systems(ACES)","javascript:window.open('http://www.iitk.ac.in/ee/')","",0,16,250);
		Menu3_1_3=new Array("Centre for Environmental Science & Engineering","javascript:window.open('http://www.iitk.ac.in/cese/')","",0,16,250);
		Menu3_1_4=new Array("Centre for Mechatronics","javascript:window.open('http://www.iitk.ac.in/robotics/')","",0,16,250);
		Menu3_1_5=new Array("Centre for Laser Technology","javascript:window.open('http://www.iitk.ac.in/celt/')","",0,16,250);
		Menu3_1_6=new Array("Computer Aided Design Laboratory","javascript:window.open('http://www.iitk.ac.in/cad/')","",0,16,250);
		Menu3_1_7=new Array("Nanoscience","javascript:window.open('http://www.iitk.ac.in/nanoscience')","",0,16,250);
		Menu3_1_8=new Array("Prabhu Goel Research Centre for Computer and Internet Security","javascript:window.open('http://www.security.iitk.ac.in/')","",0,16,250);
		Menu3_1_9=new Array("Samtel Centre for Display Technologies","javascript:window.open('http://www.iitk.ac.in/scdt/')","",0,16,250);
		Menu3_1_10=new Array("SIDBI Innovation and Incubation Centre","javascript:window.open('http://www.iitk.ac.in/siic/')","",0,16,250);
	Menu3_2=new Array("Facilities","","",5,16,150);
		Menu3_2_1=new Array("Computer Center","javascript:window.open('http://www.iitk.ac.in/cc/')","",0,16,280);
		Menu3_2_2=new Array("P K Kelkar Library","javascript:window.open('http://www.lib.iitk.ac.in/')","",0,16,250);
		Menu3_2_3=new Array("Facility for Ecological & Analytical Testing(FEAT)","javascript:window.open('http://www.iitk.ac.in/dord/feat0.htm')","",0,16,250);
		Menu3_2_4=new Array("Office Automation","javascript:window.open('http://oa.cc.iitk.ac.in:8181/Oa/Jsp/Main_Frameset.jsp')","",0,16,250);
		Menu3_2_5=new Array("Media Technologies Centre","","",0,16,250);
	Menu3_3=new Array("National Initiatives","","",3,16,150);
		Menu3_3_1=new Array("National Information Center of Earthquake Engineering","javascript:window.open('http://www.nicee.org/')","",0,16,320);
		Menu3_3_2=new Array("National Wind Tunnel Facility","javascript:window.open('http://www.iitk.ac.in/nwtf/')","",0,16,250);
		Menu3_3_3=new Array("3i Network","javascript:window.open('http://www.iitk.ac.in/3inetwork/')","",0,16,250);
	Menu3_4=new Array("P K Kelkar Library","javascript:window.open('http://library.iitk.ac.in/')","",0,16,150);

Menu4=new Array("International Relations Cell","http://www.iitk.ac.in/infocell/iitk/newhtml/int_relationscell.htm","",0,16,150);


Menu5=new Array("Alumni","","",3,16);
    Menu5_1=new Array("Welcome Alumni","http://www.iitk.ac.in/drpg/alumnirelations.htm","",0,16,150);
	Menu5_2=new Array("Alumni Association","http://www.iitkalumni.org/","",0,16,150);
	Menu5_3=new Array("IITK Foundation","http://www.iitk.ac.in/drpg/iitkf.htm","",0,16,150);
	
Menu6=new Array("","","",0,11,150);
	
Menu7=new Array("Faculty","http://www.iitk.ac.in/dofa/","",8,16,150);    
  	Menu7_1=new Array("Dean (Faculty Affairs)","http://www.iitk.ac.in/dofa/","",0,16,150);
	Menu7_2=new Array("Faculty Members","","",6,16,150);
		Menu7_2_1=new Array("Current","http://www.iitk.ac.in/dofa/DOFA/currentfaculty.htm","",0,16,150);
		Menu7_2_2=new Array("Visiting","http://www.iitk.ac.in/dofa/DOFA/visitingfaculty.htm","",0,16,150);
		Menu7_2_3=new Array("Adjunct","http://www.iitk.ac.in/dofa/DOFA/adjunct.htm","",0,16,150);
		Menu7_2_4=new Array("Emeritus","http://www.iitk.ac.in/dofa/DOFA/emeritusfaculty.htm","",0,16,150);
		Menu7_2_5=new Array("Re-employed","http://www.iitk.ac.in/dofa/DOFA/reemployedfaculty.htm","",0,16,150);
		Menu7_2_6=new Array("Retired","http://www.iitk.ac.in/dofa/DOFA/alphafaculty.pdf","",0,16,150);
Menu7_3=new Array("Academic Staff","http://www.iitk.ac.in/dofa/DOFA/academicstaff.htm","",0,16,150);
Menu7_4=new Array("Vacancies","","",1,16,150);
	Menu7_4_1=new Array("Faculty","http://www.iitk.ac.in/dofa/DOFA/facultyvacancies.htm","",0,16,150);
	Menu7_4_2=new Array("Academic Staff","http://www.iitk.ac.in/dofa/DOFA/acad_staff_vacancies.htm","",0,16,150);
	Menu7_5=new Array("Awards and Honors","javascript:window.open('http://www.iitk.ac.in/dofa/award/')","",0,16,150);
	Menu7_6=new Array("Forms","http://www.iitk.ac.in/dofa/DOFA/dofaforms.htm","",0,16,150);
	Menu7_7=new Array("Faculty Forum","javascript:window.open('http://www.iitk.ac.in/facultyforum/')","",0,16,150);
	Menu7_8=new Array("... and more","http://www.iitk.ac.in/dofa/","",0,16,150);

	
Menu8=new Array("Research & Development","http://www.iitk.ac.in/dord/","",9,16,214);
	Menu8_1=new Array("Office of R & D","http://www.iitk.ac.in/dord/","",0,16,200);
	Menu8_2=new Array("DORD Online","javascript:window.open('http://oa.cc.iitk.ac.in:8181/Oa/Jsp/Main_Frameset.jsp?frm=lgn')","",0,16,200);
	Menu8_3=new Array("Research Centers","http://www.iitk.ac.in/dord/research_centers.htm","",12,16,150);
		Menu8_3_1=new Array("Advanced Centre for Material Science (ACMS)","javascript:window.open('http://www.iitk.ac.in/acms/')","",0,16,250);
		Menu8_3_2=new Array("Advanced Centre for Electronic Systems (ACES)","javascript:window.open('http://www.iitk.ac.in/ee/')","",0,16,250);
		Menu8_3_3=new Array("Centre for Mechatronics","javascript:window.open('http://www.iitk.ac.in/robotics/')","",0,16,250);
		Menu8_3_4=new Array("Centre for Laser Technology ","javascript:window.open('http://www.iitk.ac.in/celt/')","",0,16,250);
		Menu8_3_5=new Array("Computer-Aided Design Laboratory","javascript:window.open('http://www.iitk.ac.in/cad/')","",0,16,250);
		Menu8_3_6=new Array("Prabhu Goel Research Centre for Computer and Internet ","javascript:window.open('http://www.security.iitk.ac.in/')","",0,16,250);
       	Menu8_3_7=new Array("Nanoscience","javascript:window.open('http://www.iitk.ac.in/nanoscience')","",0,16,250);
	    Menu8_3_8=new Array("Samtel Centre for Display Technologies","javascript:window.open('http://www.iitk.ac.in/scdt/')","",0,16,250);
		Menu8_3_9=new Array("SIDBI Innovation and Incubation Centre","javascript:window.open('http://www.iitk.ac.in/siic/')","",0,16,250);
		Menu8_3_10=new Array("Centre for Environmental Science and Engineering","","",0,16,250);
		Menu8_3_11=new Array("Centre of Application of Science and Technology in Archaeology ","","",0,16,250);
        Menu8_3_12=new Array("BSNL Telecom Centre of Excellence","","",0,16,250);
   
 	Menu8_4=new Array("Research News","http://www.iitk.ac.in/dord/res_news.htm","",0,16,150);
	Menu8_5=new Array("R&D Forms","http://www.iitk.ac.in/dord/dordforms.htm","",0,16,150);
	Menu8_6=new Array("Project Vacancies","http://www.iitk.ac.in/dord/projectvacancies.htm","",0,16,150);
    Menu8_7=new Array("Announcements","http://www.iitk.ac.in/dord/announcements.htm","",0,16,150);
    Menu8_8=new Array("Dream Proposals","http://www.iitk.ac.in/dord/dreamproposals/","",0,16,150);
	Menu8_9=new Array("... and more","http://www.iitk.ac.in/dord/","",0,16,150);
	
Menu9=new Array("Resource Generation","http://www.iitk.ac.in/drpg/","",12,16,214);
	Menu9_1=new Array("Dean (RPG)","http://www.iitk.ac.in/drpg/","",0,16,150);
	Menu9_2=new Array("Alumni Relations","http://www.iitk.ac.in/drpg/alumnirelations.htm","",0,16,150);
	Menu9_3=new Array("Events & Reunions","http://www.iitk.ac.in/drpg/eventsreunions.htm","",0,16,150);
	Menu9_4=new Array("Endowment Fund","http://www.iitk.ac.in/drpg/endowment.htm","",0,16,150);
	Menu9_5=new Array("Giving to IIT Kanpur","http://www.iitk.ac.in/drpg/givingiit.htm","",0,16,150);
	Menu9_6=new Array("How to Donate","http://www.iitk.ac.in/drpg/givingiit.htm","",1,16,150);
		Menu9_6_1=new Array("Current Campaign","http://www.iitk.ac.in/drpg/currentcamp.htm","",0,16,150);
	Menu9_7=new Array("IITK Foundation","http://www.iitk.ac.in/drpg/iitkf.htm","",0,16,150);
	Menu9_8=new Array("Grapevine","http://www.iitk.ac.in/drpg/newsmag.htm","",0,16,150);
	Menu9_9=new Array("SURGE Programme","http://www.iitk.ac.in/surge","",0,16,150);
	Menu9_10=new Array("Cash Award for Journal","http://www.iitk.ac.in/drpg/journal.htm","",0,16,150);
		Menu9_11=new Array("Intl. Travel Grant","http://www.iitk.ac.in/drpg/itravelsupport.htm","",0,16,150);
	Menu9_12=new Array("... and more","http://www.iitk.ac.in/drpg/","",0,16,150);
	
Menu10=new Array("Academics","http://www.iitk.ac.in/doaa/","",9,16);
	Menu10_1=new Array("Dean (Academic Affairs)","http://www.iitk.ac.in/doaa/","",0,16,150);
	
	Menu10_2=new Array("Admissions","http://www.iitk.ac.in/doaa/DOAA/ugpgadmissions.htm","",2,16,150);
		Menu10_2_1=new Array("Under Graduate","","",1,16,150);
			Menu10_2_1_1=new Array("J E E","javascript:window.open('http://www.jee.iitk.ac.in/')","",0,16,150);
		Menu10_2_2=new Array("Post Graduate","","",3,16,150);
			Menu10_2_2_1=new Array("GATE","javascript:window.open('http://www.iitk.ac.in/gate/')","",0,16,150);
			Menu10_2_2_2=new Array("JAM","javascript:window.open('http://www.iitk.ac.in/jam/')","",0,16,150);
			Menu10_2_2_3=new Array("JMET","javascript:window.open('http://www.iitk.ac.in/gate/jmet/secpg.php')","",0,16,150);
	Menu10_3=new Array("Programmes","http://www.iitk.ac.in/doaa/DOAAprogrammes.htm","",2,16,150);
		Menu10_3_1=new Array("Under Graduate","http://www.iitk.ac.in/doaa/DOAA/ugprogramme.htm","",0,16,150);
		Menu10_3_2=new Array("Post Graduate","http://www.iitk.ac.in/doaa/DOAA/pgprogramme.htm","",0,16,150);
			
	Menu10_4=new Array("Convocation","javascript:window.open('http://www.iitk.ac.in/doaa/convocation2009/')","",0,16,150);
	Menu10_5=new Array("Transcripts","javascript:window.open('http://www.iitk.ac.in/doaa/DOAA/transcript.htm')","",0,16,150);
	Menu10_6=new Array("OARS","javascript:window.open('http://oars1.cc.iitk.ac.in:4040/')","",0,16,150);
	Menu10_7=new Array("Brihaspati","http://www.iitk.ac.in/doaa/DOAA/brihaspati.htm","",2,16,150);
		Menu10_7_1=new Array("www","javascript:window.open('http://202.141.40.216:8080/brihaspati/servlet/brihaspati')","",0,16,150);
	    Menu10_7_2=new Array("IITK (Internal)","javascript:window.open('http://172.26.82.8:8080/brihaspati/servlet/brihaspati')","",0,16,150);
	Menu10_8=new Array("SURGE Programme","http://www.iitk.ac.in/surge","",0,16,150);
	Menu10_9=new Array("... and more","http://www.iitk.ac.in/doaa/","",0,16,150);
	
Menu11=new Array("Students","http://www.iitk.ac.in/dosa/","",8,16);
	Menu11_1=new Array("Dean (Students Affairs)","http://www.iitk.ac.in/dosa/","",0,16,150);
	Menu11_2=new Array("Student Gymkhana","javascript:window.open('http://students.iitk.ac.in/gymkhana/')","",0,16,150);
		
	Menu11_3=new Array("Students Awards","http://www.iitk.ac.in/dosa/DOSA/stud_awards.htm","",0,16,150);
		
	Menu11_4=new Array("Training & Placements","javascript:window.open('http://www.iitk.ac.in/spo/')","",0,16,150);
	Menu11_5=new Array("Counselling Service","javascript:window.open('http://www.iitk.ac.in/counsel/')","",0,16,150);
					
	Menu11_6=new Array("Forms","http://www.iitk.ac.in/dosa/DOSA/dosaforms.htm","",0,16,150);
		
	Menu11_7=new Array("SURGE Programme","http://www.iitk.ac.in/surge","",0,16,150);
	Menu11_8=new Array("... and more","http://www.iitk.ac.in/dosa/","",0,16,150);
	
Menu12=new Array("","","",0,11);
	
Menu13=new Array("Outreach","http://www.iitk.ac.in/infocell/iitk/newhtml/landingpages/outreach.htm","",6,16,150); 
	Menu13_1=new Array("Continuing Education","javascript:window.open('http://www.iitk.ac.in/qip/')","",0,16,150);
		//Menu12_1_1=new Array("Space Technology Cell","blank.htm","",0,16,150);
		//Menu12_1_2=new Array("Workshops & Courses","blank.htm","",0,16,150);
		//Menu12_1_3=new Array("Calendar of Events","blank.htm","",0,16,150);
	Menu13_2=new Array("Distance Education","javascript:window.open('http://www.iitk.ac.in/doaa/outreach/')","",0,16,320);
//		Menu12_2_1=new Array("NPTEL","javascript:window.open('http://www.nptel.iitm.ernet.in/')","",0,16,150);
	Menu13_3=new Array("SIDBI Incubation","javascript:window.open('http://www.iitk.ac.in/siic/')","",0,16,150);
	Menu13_4=new Array("NPEEE","javascript:window.open('http://www.nicee.org/npeee/')","",0,16,150);
	Menu13_5=new Array("NICEE","javascript:window.open('http://www.nicee.org/')","",0,16,150);
	Menu13_6=new Array("Quality Improvement Programmes","http://www.iitk.ac.in/qip/","",0,16,150);
		//Menu12_6_1=new Array("Admission Procedure","blank.htm","",0,16,150);
		//Menu12_6_2=new Array("Forms & Deadlines","blank.htm","",0,16,150);

Menu14=new Array("Press","http://www.iitk.ac.in/infocell/iitk/newhtml/landingpages/press.htm","",3,16,150);  
	Menu14_1=new Array("Coverage","http://www.iitk.ac.in/infocell/iitk/newhtml/press_coverage.htm","",0,16,150);
 	Menu14_2=new Array("Releases","http://www.iitk.ac.in/infocell/iitk/newhtml/press_release.htm","",0,16,150);
	Menu14_3=new Array("Rejoinder","http://www.iitk.ac.in/infocell/iitk/newhtml/press_rejoinder.htm","",0,16,150);
	
Menu15=new Array("Vigilance","http://www.iitk.ac.in/infocell/iitk/newhtml/cvo.htm","",0,16,150);
	
Menu16=new Array("Recruitments","","",4,16,150);
	Menu16_1=new Array("Project","http://www.iitk.ac.in/dord/projectvacancies.htm","",0,16,150);
	Menu16_2=new Array("Faculty","javascript:window.open('http://www.iitk.ac.in/dofa/recruitment2008/')","",0,16);
	Menu16_3=new Array("Non-Academic Staff","javascript:window.open('http://www.iitk.ac.in/dord/employment.htm')","",0,16);
	Menu16_4=new Array("Alumni Association Office Vacancy","javascript:window.open('http://www.iitk.ac.in/infocell/iitk/newhtml/aa_webmaster.htm')","",0,16);


Menu17=new Array("Amenities & Services","","",2,16,150);  
 	Menu17_1=new Array("Amenities","","",11,16,150);
	    Menu17_1_1=new Array("Book Club","javascript:window.open('http://www.iitk.ac.in/bookclub')","",0,16,150);
		Menu17_1_2=new Array("Campus School","javascript:window.open('http://www.iitk.ac.in/campusschool/')","",0,16,150);
		Menu17_1_3=new Array("Community Centre","javascript:window.open('http://www.iitk.ac.in/commc/')","",0,16,150);
	    Menu17_1_4=new Array("Faculty Club","javascript:window.open('http://www.iitk.ac.in/facultyclub/')","",0,16,150);
		Menu17_1_5=new Array("Gliding Club","javascript:window.open('http://students.iitk.ac.in/glidingclub/')","",0,16,150);
		Menu17_1_6=new Array("Kendriya Vidyalaya","javascript:window.open('http://www.iitk.ac.in/kviit/')","",0,16,150);
  	    Menu17_1_7=new Array("Nursery","javascript:window.open('http://www.iitk.ac.in/EAC')","",0,16,150);
	    Menu17_1_8=new Array("Swimming Pool","javascript:window.open('http://www.iitk.ac.in/dosa/Swimming/')","",0,16,150);
		Menu17_1_9=new Array("Staff Gymkhana","javascript:window.open('http://www.iitk.ac.in/staffgymkhana/')","",0,16,150);
		Menu17_1_10=new Array("Visitors' Hostel","javascript:window.open('http://www.iitk.ac.in/vh/')","",0,16,150);
		Menu17_1_11=new Array("Women's Association","javascript:window.open('http://www.iitk.ac.in/wa/')","",0,16,150);
		
		
	Menu17_2=new Array("Services","","",7,16,150);
		Menu17_2_1=new Array("Central Stores","javascript:window.open('http://www.iitk.ac.in/centralstores/')","",0,16,150);
		Menu17_2_2=new Array("Estate Office","javascript:window.open('http://www.iitk.ac.in/estateoffice/')","",0,16,150);
		Menu17_2_3=new Array("Finance & Accounts","javascript:window.open('http://www.iitk.ac.in/infocell/iitk/fakenote.htm')","",0,16,150);
		Menu17_2_4=new Array("Health Center","javascript:window.open('http://www.iitk.ac.in/hc/')","",0,16,150);
		Menu17_2_5=new Array("Institute Works Department","javascript:window.open('http://www.iitk.ac.in/iwd/')","",0,16,180);
		Menu17_2_6=new Array("Media Technologies Center","javascript:window.open('http://www.iitk.ac.in/tvc/')","",0,16,180);
		Menu17_2_7=new Array("Office Automation","javascript:window.open('http://oa.cc.iitk.ac.in:8181/Oa/Jsp/Main_Frameset.jsp')","",0,16,150);
	

Menu18=new Array("Bulletin Board","","",6,16,150);  

		Menu18_1=new Array("Public Information System","http://www.iitk.ac.in/infocell/iitk/newhtml/rightinformationact.htm","",0,16,150);
		Menu18_2=new Array("Office Orders","http://www.iitk.ac.in/infocell/iitk/newhtml/office_orders.htm","",0,16,150);
		Menu18_3=new Array("Holidays","","",2,16,150);
		    Menu18_3_1=new Array("Institute Holidays","http://web.iitk.ac.in/infocell/iitk/newhtml/instholidays.htm","",0,16,150);
		    Menu18_3_2=new Array("Restricted Holidays","http://web.iitk.ac.in/infocell/iitk/newhtml/resttholidays.htm","",0,16,150);
		Menu18_4=new Array("Birds in IIT Kanpur","http://172.28.121.222/birdsite/index.html","",0,16,150);
		Menu18_5=new Array("Bus Schedule","http://web.iitk.ac.in/infocell/iitk/newhtml/bus.htm","",0,16,150);
		Menu18_6=new Array("Tender","http://www.iitk.ac.in/dord/dord_tender.htm","",0,16,150);

Menu19=new Array("","","",0,11);
	
Menu20=new Array("IIT Rajasthan","http://www.iitk.ac.in/iitj","",0,16,150); 
;;
		var fimage="http://www.iitk.ac.in/infocell/iitk/newhtml/images/pic1.jpg"
		var timage="http://www.iitk.ac.in/infocell/iitk/newhtml/images/pic2.jpg"
		var thimage="http://www.iitk.ac.in/infocell/iitk/newhtml/images/pic3.jpg"
		var frimage="http://www.iitk.ac.in/infocell/iitk/newhtml/images/pic4.jpg"
		var fvimage="http://www.iitk.ac.in/infocell/iitk/newhtml/images/pic5.jpg"
		var sxtimage="http://www.iitk.ac.in/infocell/iitk/newhtml/images/pic6.jpg"
		var seimage="http://www.iitk.ac.in/infocell/iitk/newhtml/images/pic7.jpg"
		var crntdate=new Date()
		var today=crntdate.getDay()
		if (today==1)
			document.write('<img src="'+fimage+'">')
		else if (today==2)
			document.write('<img src="'+timage+'">')
		else if (today==3)
			document.write('<img src="'+thimage+'">')
		else if (today==4)
			document.write('<img src="'+frimage+'">')
		else if (today==5)
			document.write('<img src="'+fvimage+'">')
		else if (today==6)
			document.write('<img src="'+sxtimage+'">')
		else
		document.write('<img src="'+seimage+'">')
		//-->
		;;
                        /***********************************************************************************
*	(c) Ger Versluis 1500 version 5.411 24 December 1501 (updated Jan 31st, 1503 by Dynamic Drive for Opera7)
*	For info write to menus@burmees.nl		          *
*	You may remove all comments for faster loading	          *		
***********************************************************************************/

	var NoOffFirstLineMenus=20;			// Number of first level items
	var LowBgColor='white';			// Background color when mouse is not over
	var LowSubBgColor='#66af5c';			// Background color when mouse is not over on subs
	var HighBgColor='#ff9600';			// Background color when mouse is over
	var HighSubBgColor='#ff9600';			// Background color when mouse is over on subs
	var FontLowColor='black';			// Font color when mouse is not over
	var FontSubLowColor='white';			// Font color subs when mouse is not over
	var FontHighColor='white';			// Font color when mouse is over
	var FontSubHighColor='white';			// Font color subs when mouse is over
	var BorderColor='black';			// Border color
	var BorderSubColor='black';			// Border color for subs
	var BorderWidth=0;				// Border width
	var BorderBtwnElmnts=0;			// Border between elements 1 or 0
	var FontFamily="verdana,arial,comic sans ms,technical"	// Font family menu items
	var FontSize=8;				// Font size menu items
	var FontBold=0;				// Bold menu items 1 or 0
	var FontItalic=0;				// Italic menu items 1 or 0
	var MenuTextCentered='left';			// Item text position 'left', 'center' or 'right'
	var MenuCentered='left';			// Menu horizontal position 'left', 'center' or 'right'
	var MenuVerticalCentered='top';		// Menu vertical position 'top', 'middle','bottom' or static
	var ChildOverlap=.01;				// horizontal overlap child/ parent
	var ChildVerticalOverlap=.01;			// vertical overlap child/ parent
	var StartTop=1;				// Menu offset x coordinate
	var StartLeft=15;				// Menu offset y coordinate
	var VerCorrect=0;				// Multiple frames y correction
	var HorCorrect=0;				// Multiple frames x correction
	var LeftPaddng=2;				// Left padding
	var TopPaddng=1;				// Top padding
	var FirstLineHorizontal=0;			// SET TO 1 FOR HORIZONTAL MENU, 0 FOR VERTICAL
	var MenuFramesVertical=1;			// Frames in cols or rows 1 or 0
	var DissapearDelay=1000;			// delay before menu folds in
	var TakeOverBgColor=1;			// Menu frame takes over background color subitem frame
	var FirstLineFrame='navig';			// Frame where first level appears
	var SecLineFrame='space';			// Frame where sub levels appear
	var DocTargetFrame='space';			// Frame where target documents appear
	var TargetLoc='MenuPos';				// span id for relative positioning
	var HideTop=0;				// Hide first level when loading new document 1 or 0
	var MenuWrap=1;				// enables/ disables menu wrap 1 or 0
	var RightToLeft=0;				// enables/ disables right to left unfold 1 or 0
	var UnfoldsOnClick=0;			// Level 1 unfolds onclick/ onmouseover
	var WebMasterCheck=0;			// menu tree checking on or off 1 or 0
	var ShowArrow=0;				// Uses arrow gifs when 1
	var KeepHilite=1;				// Keep selected path highligthed
	var Arrws=['images/tri.gif',5,10,'tridown.gif',10,5,'trileft.gif',5,10];	// Arrow source, width and height

function BeforeStart(){return}
function AfterBuild(){return}
function BeforeFirstOpen(){return}
function AfterCloseAll(){return}


// Menu tree
//	MenuX=new Array(Text to show, Link, background image (optional), number of sub elements, height, width);
//	For rollover images set "Text to show" to:  "rollover:Image1.jpg:Image2.jpg"
//	for new window //javascript:window.open('http://www.iitk.ac.in')

Menu1=new Array("Institute","http://www.iitk.ac.in/infocell/iitk/newhtml/institute.htm","",10,16,150);
		Menu1_1=new Array("History","http://www.iitk.ac.in/infocell/iitk/newhtml/history.htm","",1,16,150);
			Menu1_1_1=new Array("IITK Saga","http://www.iitk.ac.in/infocell/iitk/newhtml/iitksaga.htm","",0,16,150);
		Menu1_2=new Array("Acts and Statutes","http://www.iitk.ac.in/infocell/iitk/newhtml/a&s.htm","",0,16,150);
		Menu1_3=new Array("Board of Governors","http://www.iitk.ac.in/infocell/iitk/newhtml/bogoverns.htm","",0,16,150);
		Menu1_4=new Array("Finance Committee","http://www.iitk.ac.in/infocell/iitk/newhtml/financecomm.htm","",0,16,150);
		Menu1_5=new Array("Building & Works Committee","http://www.iitk.ac.in/infocell/iitk/newhtml/bwcomm.htm","",0,16,150);
		Menu1_6=new Array("Grievance Committee","http://www.iitk.ac.in/infocell/iitk/newhtml/grievancecomm.htm","",0,16,150);
		Menu1_7=new Array("Administration","","",4,16,150);
			Menu1_7_1=new Array("Key Administrators","http://www.iitk.ac.in/infocell/iitk/newhtml/kadmins.htm","",0,16,150);
			Menu1_7_2=new Array("Directorate","http://www.iitk.ac.in/infocell/iitk/newhtml/directorate.htm","",0,16,150);
			Menu1_7_3=new Array("Registrar Office","http://www.iitk.ac.in/infocell/iitk/newhtml/registrar.htm","",0,16,150);
			Menu1_7_4=new Array("Administration Office","http://www.iitk.ac.in/infocell/iitk/newhtml/administration.htm","",0,16,150);
		Menu1_8=new Array("IIT Review Report","http://www.iitk.ac.in/infocell/iitk/newhtml/reviewcom.htm","",0,16,150);
		Menu1_9=new Array("Campus","http://www.iitk.ac.in/infocell/iitk/newhtml/campus.htm","",0,16,150);
		Menu1_10=new Array("IITK Logo","http://www.iitk.ac.in/infocell/iitk/newhtml/iitklogo.htm","",0,16,150);
	
	Menu2=new Array("Departments","http://www.iitk.ac.in/infocell/iitk/newhtml/landingpages/departments.htm","",5,16,150);
	Menu2_1=new Array("Engineering","","",9,16,150);	
		Menu2_1_1=new Array("Aerospace Engineering","javascript:window.open('http://www.iitk.ac.in/aero/')","",0,16,220); 
		Menu2_1_2=new Array("Biological Sciences & Bioengineering","javascript:window.open('http://www.iitk.ac.in/bsbe/')","",0,16,150);
		Menu2_1_3=new Array("Chemical Engineering","http://www.iitk.ac.in/che/","",0,16,150);
        Menu2_1_4=new Array("Civil Engineering","javascript:window.open('http://www.iitk.ac.in/ce/')","",0,16,150);
        Menu2_1_5=new Array("Computer Science & Engineering","javascript:window.open('http://www.cse.iitk.ac.in/')","",0,16,150);
		Menu2_1_6=new Array("Electrical Engineering","javascript:window.open('http://www.iitk.ac.in/ee/')","",0,16,150);
		Menu2_1_7=new Array("Industrial & Management Engineering","http://www.iitk.ac.in/ime/","",0,16,150);
		Menu2_1_8=new Array("Materials Science & Engineering","javascript:window.open('http://www.iitk.ac.in/mme/')","",0,16,150);
		Menu2_1_9=new Array("Mechanical Engineering","javascript:window.open('http://www.iitk.ac.in/me/')","",0,16,150);
						  
	Menu2_2=new Array("Humanities","","",1,16,150);
		Menu2_2_1=new Array("Humanities & Social Sciences","javascript:window.open('http://www.iitk.ac.in/hss/')","",0,16,180);
		
	Menu2_3=new Array("Management","","",1,16,150);
		Menu2_3_1=new Array("Industrial & Management Engineering","javascript:window.open('http://www.iitk.ac.in/ime/')","",0,16,220);
		
	Menu2_4=new Array("Sciences","","",3,16,150);
		Menu2_4_1=new Array("Chemistry","javascript:window.open('http://www.iitk.ac.in/chm/')","",0,16,150); 
		Menu2_4_2=new Array("Mathematics & Statistics","javascript:window.open('http://www.iitk.ac.in/math/')","",0);
		Menu2_4_3=new Array("Physics","javascript:window.open('http://www.iitk.ac.in/phy/')","",0);
		
	Menu2_5=new Array("Inter Disciplinary Programmes","","",5,16,150);  
		Menu2_5_1=new Array("Environmental Engineering & Management","javascript:window.open('http://www.iitk.ac.in/eem/')","",0,16,260);
		Menu2_5_2=new Array("Laser Technology","javascript:window.open('http://www.iitk.ac.in/celt/')","",0,16,150);
		Menu2_5_3=new Array("Master of Design","javascript:window.open('http://www.iitk.ac.in/design/')","",0,16,150);
		Menu2_5_4=new Array("Materials Science Programme","javascript:window.open('http://www.iitk.ac.in/msp/')","",0,16,150);
		Menu2_5_5=new Array("Nuclear Engineering & Technology","javascript:window.open('http://www.iitk.ac.in/net/')","",0,16,150);

Menu3=new Array("Centres & Facilities","","",4,16,150);
	Menu3_1=new Array("Centres","","",10,16,200);
		Menu3_1_1=new Array("Advanced Centre for Material Science(ACMS)","javascript:window.open('http://www.iitk.ac.in/acms/')","",0,16,400);
		Menu3_1_2=new Array("Advanced Centre for Electronic Systems(ACES)","javascript:window.open('http://www.iitk.ac.in/ee/')","",0,16,250);
		Menu3_1_3=new Array("Centre for Environmental Science & Engineering","javascript:window.open('http://www.iitk.ac.in/cese/')","",0,16,250);
		Menu3_1_4=new Array("Centre for Mechatronics","javascript:window.open('http://www.iitk.ac.in/robotics/')","",0,16,250);
		Menu3_1_5=new Array("Centre for Laser Technology","javascript:window.open('http://www.iitk.ac.in/celt/')","",0,16,250);
		Menu3_1_6=new Array("Computer Aided Design Laboratory","javascript:window.open('http://www.iitk.ac.in/cad/')","",0,16,250);
		Menu3_1_7=new Array("Nanoscience","javascript:window.open('http://www.iitk.ac.in/nanoscience')","",0,16,250);
		Menu3_1_8=new Array("Prabhu Goel Research Centre for Computer and Internet Security","javascript:window.open('http://www.security.iitk.ac.in/')","",0,16,250);
		Menu3_1_9=new Array("Samtel Centre for Display Technologies","javascript:window.open('http://www.iitk.ac.in/scdt/')","",0,16,250);
		Menu3_1_10=new Array("SIDBI Innovation and Incubation Centre","javascript:window.open('http://www.iitk.ac.in/siic/')","",0,16,250);
	Menu3_2=new Array("Facilities","","",5,16,150);
		Menu3_2_1=new Array("Computer Center","javascript:window.open('http://www.iitk.ac.in/cc/')","",0,16,280);
		Menu3_2_2=new Array("P K Kelkar Library","javascript:window.open('http://www.lib.iitk.ac.in/')","",0,16,250);
		Menu3_2_3=new Array("Facility for Ecological & Analytical Testing(FEAT)","javascript:window.open('http://www.iitk.ac.in/dord/feat0.htm')","",0,16,250);
		Menu3_2_4=new Array("Office Automation","javascript:window.open('http://oa.cc.iitk.ac.in:8181/Oa/Jsp/Main_Frameset.jsp')","",0,16,250);
		Menu3_2_5=new Array("Media Technologies Centre","","",0,16,250);
	Menu3_3=new Array("National Initiatives","","",3,16,150);
		Menu3_3_1=new Array("National Information Center of Earthquake Engineering","javascript:window.open('http://www.nicee.org/')","",0,16,320);
		Menu3_3_2=new Array("National Wind Tunnel Facility","javascript:window.open('http://www.iitk.ac.in/nwtf/')","",0,16,250);
		Menu3_3_3=new Array("3i Network","javascript:window.open('http://www.iitk.ac.in/3inetwork/')","",0,16,250);
	Menu3_4=new Array("P K Kelkar Library","javascript:window.open('http://library.iitk.ac.in/')","",0,16,150);

Menu4=new Array("International Relations Cell","http://www.iitk.ac.in/infocell/iitk/newhtml/int_relationscell.htm","",0,16,150);


Menu5=new Array("Alumni","","",3,16);
    Menu5_1=new Array("Welcome Alumni","http://www.iitk.ac.in/drpg/alumnirelations.htm","",0,16,150);
	Menu5_2=new Array("Alumni Association","http://www.iitkalumni.org/","",0,16,150);
	Menu5_3=new Array("IITK Foundation","http://www.iitk.ac.in/drpg/iitkf.htm","",0,16,150);
	
Menu6=new Array("","","",0,11,150);
	
Menu7=new Array("Faculty","http://www.iitk.ac.in/dofa/","",8,16,150);    
  	Menu7_1=new Array("Dean (Faculty Affairs)","http://www.iitk.ac.in/dofa/","",0,16,150);
	Menu7_2=new Array("Faculty Members","","",6,16,150);
		Menu7_2_1=new Array("Current","http://www.iitk.ac.in/dofa/DOFA/currentfaculty.htm","",0,16,150);
		Menu7_2_2=new Array("Visiting","http://www.iitk.ac.in/dofa/DOFA/visitingfaculty.htm","",0,16,150);
		Menu7_2_3=new Array("Adjunct","http://www.iitk.ac.in/dofa/DOFA/adjunct.htm","",0,16,150);
		Menu7_2_4=new Array("Emeritus","http://www.iitk.ac.in/dofa/DOFA/emeritusfaculty.htm","",0,16,150);
		Menu7_2_5=new Array("Re-employed","http://www.iitk.ac.in/dofa/DOFA/reemployedfaculty.htm","",0,16,150);
		Menu7_2_6=new Array("Retired","http://www.iitk.ac.in/dofa/DOFA/alphafaculty.pdf","",0,16,150);
Menu7_3=new Array("Academic Staff","http://www.iitk.ac.in/dofa/DOFA/academicstaff.htm","",0,16,150);
Menu7_4=new Array("Vacancies","","",1,16,150);
	Menu7_4_1=new Array("Faculty","http://www.iitk.ac.in/dofa/DOFA/facultyvacancies.htm","",0,16,150);
	Menu7_4_2=new Array("Academic Staff","http://www.iitk.ac.in/dofa/DOFA/acad_staff_vacancies.htm","",0,16,150);
	Menu7_5=new Array("Awards and Honors","javascript:window.open('http://www.iitk.ac.in/dofa/award/')","",0,16,150);
	Menu7_6=new Array("Forms","http://www.iitk.ac.in/dofa/DOFA/dofaforms.htm","",0,16,150);
	Menu7_7=new Array("Faculty Forum","javascript:window.open('http://www.iitk.ac.in/facultyforum/')","",0,16,150);
	Menu7_8=new Array("... and more","http://www.iitk.ac.in/dofa/","",0,16,150);

	
Menu8=new Array("Research & Development","http://www.iitk.ac.in/dord/","",9,16,214);
	Menu8_1=new Array("Office of R & D","http://www.iitk.ac.in/dord/","",0,16,200);
	Menu8_2=new Array("DORD Online","javascript:window.open('http://oa.cc.iitk.ac.in:8181/Oa/Jsp/Main_Frameset.jsp?frm=lgn')","",0,16,200);
	Menu8_3=new Array("Research Centers","http://www.iitk.ac.in/dord/research_centers.htm","",12,16,150);
		Menu8_3_1=new Array("Advanced Centre for Material Science (ACMS)","javascript:window.open('http://www.iitk.ac.in/acms/')","",0,16,250);
		Menu8_3_2=new Array("Advanced Centre for Electronic Systems (ACES)","javascript:window.open('http://www.iitk.ac.in/ee/')","",0,16,250);
		Menu8_3_3=new Array("Centre for Mechatronics","javascript:window.open('http://www.iitk.ac.in/robotics/')","",0,16,250);
		Menu8_3_4=new Array("Centre for Laser Technology ","javascript:window.open('http://www.iitk.ac.in/celt/')","",0,16,250);
		Menu8_3_5=new Array("Computer-Aided Design Laboratory","javascript:window.open('http://www.iitk.ac.in/cad/')","",0,16,250);
		Menu8_3_6=new Array("Prabhu Goel Research Centre for Computer and Internet ","javascript:window.open('http://www.security.iitk.ac.in/')","",0,16,250);
       	Menu8_3_7=new Array("Nanoscience","javascript:window.open('http://www.iitk.ac.in/nanoscience')","",0,16,250);
	    Menu8_3_8=new Array("Samtel Centre for Display Technologies","javascript:window.open('http://www.iitk.ac.in/scdt/')","",0,16,250);
		Menu8_3_9=new Array("SIDBI Innovation and Incubation Centre","javascript:window.open('http://www.iitk.ac.in/siic/')","",0,16,250);
		Menu8_3_10=new Array("Centre for Environmental Science and Engineering","","",0,16,250);
		Menu8_3_11=new Array("Centre of Application of Science and Technology in Archaeology ","","",0,16,250);
        Menu8_3_12=new Array("BSNL Telecom Centre of Excellence","","",0,16,250);
   
 	Menu8_4=new Array("Research News","http://www.iitk.ac.in/dord/res_news.htm","",0,16,150);
	Menu8_5=new Array("R&D Forms","http://www.iitk.ac.in/dord/dordforms.htm","",0,16,150);
	Menu8_6=new Array("Project Vacancies","http://www.iitk.ac.in/dord/projectvacancies.htm","",0,16,150);
    Menu8_7=new Array("Announcements","http://www.iitk.ac.in/dord/announcements.htm","",0,16,150);
    Menu8_8=new Array("Dream Proposals","http://www.iitk.ac.in/dord/dreamproposals/","",0,16,150);
	Menu8_9=new Array("... and more","http://www.iitk.ac.in/dord/","",0,16,150);
	
Menu9=new Array("Resource Generation","http://www.iitk.ac.in/drpg/","",12,16,214);
	Menu9_1=new Array("Dean (RPG)","http://www.iitk.ac.in/drpg/","",0,16,150);
	Menu9_2=new Array("Alumni Relations","http://www.iitk.ac.in/drpg/alumnirelations.htm","",0,16,150);
	Menu9_3=new Array("Events & Reunions","http://www.iitk.ac.in/drpg/eventsreunions.htm","",0,16,150);
	Menu9_4=new Array("Endowment Fund","http://www.iitk.ac.in/drpg/endowment.htm","",0,16,150);
	Menu9_5=new Array("Giving to IIT Kanpur","http://www.iitk.ac.in/drpg/givingiit.htm","",0,16,150);
	Menu9_6=new Array("How to Donate","http://www.iitk.ac.in/drpg/givingiit.htm","",1,16,150);
		Menu9_6_1=new Array("Current Campaign","http://www.iitk.ac.in/drpg/currentcamp.htm","",0,16,150);
	Menu9_7=new Array("IITK Foundation","http://www.iitk.ac.in/drpg/iitkf.htm","",0,16,150);
	Menu9_8=new Array("Grapevine","http://www.iitk.ac.in/drpg/newsmag.htm","",0,16,150);
	Menu9_9=new Array("SURGE Programme","http://www.iitk.ac.in/surge","",0,16,150);
	Menu9_10=new Array("Cash Award for Journal","http://www.iitk.ac.in/drpg/journal.htm","",0,16,150);
		Menu9_11=new Array("Intl. Travel Grant","http://www.iitk.ac.in/drpg/itravelsupport.htm","",0,16,150);
	Menu9_12=new Array("... and more","http://www.iitk.ac.in/drpg/","",0,16,150);
	
Menu10=new Array("Academics","http://www.iitk.ac.in/doaa/","",9,16);
	Menu10_1=new Array("Dean (Academic Affairs)","http://www.iitk.ac.in/doaa/","",0,16,150);
	
	Menu10_2=new Array("Admissions","http://www.iitk.ac.in/doaa/DOAA/ugpgadmissions.htm","",2,16,150);
		Menu10_2_1=new Array("Under Graduate","","",1,16,150);
			Menu10_2_1_1=new Array("J E E","javascript:window.open('http://www.jee.iitk.ac.in/')","",0,16,150);
		Menu10_2_2=new Array("Post Graduate","","",3,16,150);
			Menu10_2_2_1=new Array("GATE","javascript:window.open('http://www.iitk.ac.in/gate/')","",0,16,150);
			Menu10_2_2_2=new Array("JAM","javascript:window.open('http://www.iitk.ac.in/jam/')","",0,16,150);
			Menu10_2_2_3=new Array("JMET","javascript:window.open('http://www.iitk.ac.in/gate/jmet/secpg.php')","",0,16,150);
	Menu10_3=new Array("Programmes","http://www.iitk.ac.in/doaa/DOAAprogrammes.htm","",2,16,150);
		Menu10_3_1=new Array("Under Graduate","http://www.iitk.ac.in/doaa/DOAA/ugprogramme.htm","",0,16,150);
		Menu10_3_2=new Array("Post Graduate","http://www.iitk.ac.in/doaa/DOAA/pgprogramme.htm","",0,16,150);
			
	Menu10_4=new Array("Convocation","javascript:window.open('http://www.iitk.ac.in/doaa/convocation2009/')","",0,16,150);
	Menu10_5=new Array("Transcripts","javascript:window.open('http://www.iitk.ac.in/doaa/DOAA/transcript.htm')","",0,16,150);
	Menu10_6=new Array("OARS","javascript:window.open('http://oars1.cc.iitk.ac.in:4040/')","",0,16,150);
	Menu10_7=new Array("Brihaspati","http://www.iitk.ac.in/doaa/DOAA/brihaspati.htm","",2,16,150);
		Menu10_7_1=new Array("www","javascript:window.open('http://202.141.40.216:8080/brihaspati/servlet/brihaspati')","",0,16,150);
	    Menu10_7_2=new Array("IITK (Internal)","javascript:window.open('http://172.26.82.8:8080/brihaspati/servlet/brihaspati')","",0,16,150);
	Menu10_8=new Array("SURGE Programme","http://www.iitk.ac.in/surge","",0,16,150);
	Menu10_9=new Array("... and more","http://www.iitk.ac.in/doaa/","",0,16,150);
	
Menu11=new Array("Students","http://www.iitk.ac.in/dosa/","",8,16);
	Menu11_1=new Array("Dean (Students Affairs)","http://www.iitk.ac.in/dosa/","",0,16,150);
	Menu11_2=new Array("Student Gymkhana","javascript:window.open('http://students.iitk.ac.in/gymkhana/')","",0,16,150);
		
	Menu11_3=new Array("Students Awards","http://www.iitk.ac.in/dosa/DOSA/stud_awards.htm","",0,16,150);
		
	Menu11_4=new Array("Training & Placements","javascript:window.open('http://www.iitk.ac.in/spo/')","",0,16,150);
	Menu11_5=new Array("Counselling Service","javascript:window.open('http://www.iitk.ac.in/counsel/')","",0,16,150);
					
	Menu11_6=new Array("Forms","http://www.iitk.ac.in/dosa/DOSA/dosaforms.htm","",0,16,150);
		
	Menu11_7=new Array("SURGE Programme","http://www.iitk.ac.in/surge","",0,16,150);
	Menu11_8=new Array("... and more","http://www.iitk.ac.in/dosa/","",0,16,150);
	
Menu12=new Array("","","",0,11);
	
Menu13=new Array("Outreach","http://www.iitk.ac.in/infocell/iitk/newhtml/landingpages/outreach.htm","",6,16,150); 
	Menu13_1=new Array("Continuing Education","javascript:window.open('http://www.iitk.ac.in/qip/')","",0,16,150);
		//Menu12_1_1=new Array("Space Technology Cell","blank.htm","",0,16,150);
		//Menu12_1_2=new Array("Workshops & Courses","blank.htm","",0,16,150);
		//Menu12_1_3=new Array("Calendar of Events","blank.htm","",0,16,150);
	Menu13_2=new Array("Distance Education","javascript:window.open('http://www.iitk.ac.in/doaa/outreach/')","",0,16,320);
//		Menu12_2_1=new Array("NPTEL","javascript:window.open('http://www.nptel.iitm.ernet.in/')","",0,16,150);
	Menu13_3=new Array("SIDBI Incubation","javascript:window.open('http://www.iitk.ac.in/siic/')","",0,16,150);
	Menu13_4=new Array("NPEEE","javascript:window.open('http://www.nicee.org/npeee/')","",0,16,150);
	Menu13_5=new Array("NICEE","javascript:window.open('http://www.nicee.org/')","",0,16,150);
	Menu13_6=new Array("Quality Improvement Programmes","http://www.iitk.ac.in/qip/","",0,16,150);
		//Menu12_6_1=new Array("Admission Procedure","blank.htm","",0,16,150);
		//Menu12_6_2=new Array("Forms & Deadlines","blank.htm","",0,16,150);

Menu14=new Array("Press","http://www.iitk.ac.in/infocell/iitk/newhtml/landingpages/press.htm","",3,16,150);  
	Menu14_1=new Array("Coverage","http://www.iitk.ac.in/infocell/iitk/newhtml/press_coverage.htm","",0,16,150);
 	Menu14_2=new Array("Releases","http://www.iitk.ac.in/infocell/iitk/newhtml/press_release.htm","",0,16,150);
	Menu14_3=new Array("Rejoinder","http://www.iitk.ac.in/infocell/iitk/newhtml/press_rejoinder.htm","",0,16,150);
	
Menu15=new Array("Vigilance","http://www.iitk.ac.in/infocell/iitk/newhtml/cvo.htm","",0,16,150);
	
Menu16=new Array("Recruitments","","",4,16,150);
	Menu16_1=new Array("Project","http://www.iitk.ac.in/dord/projectvacancies.htm","",0,16,150);
	Menu16_2=new Array("Faculty","javascript:window.open('http://www.iitk.ac.in/dofa/recruitment2008/')","",0,16);
	Menu16_3=new Array("Non-Academic Staff","javascript:window.open('http://www.iitk.ac.in/dord/employment.htm')","",0,16);
	Menu16_4=new Array("Alumni Association Office Vacancy","javascript:window.open('http://www.iitk.ac.in/infocell/iitk/newhtml/aa_webmaster.htm')","",0,16);


Menu17=new Array("Amenities & Services","","",2,16,150);  
 	Menu17_1=new Array("Amenities","","",11,16,150);
	    Menu17_1_1=new Array("Book Club","javascript:window.open('http://www.iitk.ac.in/bookclub')","",0,16,150);
		Menu17_1_2=new Array("Campus School","javascript:window.open('http://www.iitk.ac.in/campusschool/')","",0,16,150);
		Menu17_1_3=new Array("Community Centre","javascript:window.open('http://www.iitk.ac.in/commc/')","",0,16,150);
	    Menu17_1_4=new Array("Faculty Club","javascript:window.open('http://www.iitk.ac.in/facultyclub/')","",0,16,150);
		Menu17_1_5=new Array("Gliding Club","javascript:window.open('http://students.iitk.ac.in/glidingclub/')","",0,16,150);
		Menu17_1_6=new Array("Kendriya Vidyalaya","javascript:window.open('http://www.iitk.ac.in/kviit/')","",0,16,150);
  	    Menu17_1_7=new Array("Nursery","javascript:window.open('http://www.iitk.ac.in/EAC')","",0,16,150);
	    Menu17_1_8=new Array("Swimming Pool","javascript:window.open('http://www.iitk.ac.in/dosa/Swimming/')","",0,16,150);
		Menu17_1_9=new Array("Staff Gymkhana","javascript:window.open('http://www.iitk.ac.in/staffgymkhana/')","",0,16,150);
		Menu17_1_10=new Array("Visitors' Hostel","javascript:window.open('http://www.iitk.ac.in/vh/')","",0,16,150);
		Menu17_1_11=new Array("Women's Association","javascript:window.open('http://www.iitk.ac.in/wa/')","",0,16,150);
		
		
	Menu17_2=new Array("Services","","",7,16,150);
		Menu17_2_1=new Array("Central Stores","javascript:window.open('http://www.iitk.ac.in/centralstores/')","",0,16,150);
		Menu17_2_2=new Array("Estate Office","javascript:window.open('http://www.iitk.ac.in/estateoffice/')","",0,16,150);
		Menu17_2_3=new Array("Finance & Accounts","javascript:window.open('http://www.iitk.ac.in/infocell/iitk/fakenote.htm')","",0,16,150);
		Menu17_2_4=new Array("Health Center","javascript:window.open('http://www.iitk.ac.in/hc/')","",0,16,150);
		Menu17_2_5=new Array("Institute Works Department","javascript:window.open('http://www.iitk.ac.in/iwd/')","",0,16,180);
		Menu17_2_6=new Array("Media Technologies Center","javascript:window.open('http://www.iitk.ac.in/tvc/')","",0,16,180);
		Menu17_2_7=new Array("Office Automation","javascript:window.open('http://oa.cc.iitk.ac.in:8181/Oa/Jsp/Main_Frameset.jsp')","",0,16,150);
	

Menu18=new Array("Bulletin Board","","",6,16,150);  

		Menu18_1=new Array("Public Information System","http://www.iitk.ac.in/infocell/iitk/newhtml/rightinformationact.htm","",0,16,150);
		Menu18_2=new Array("Office Orders","http://www.iitk.ac.in/infocell/iitk/newhtml/office_orders.htm","",0,16,150);
		Menu18_3=new Array("Holidays","","",2,16,150);
		    Menu18_3_1=new Array("Institute Holidays","http://web.iitk.ac.in/infocell/iitk/newhtml/instholidays.htm","",0,16,150);
		    Menu18_3_2=new Array("Restricted Holidays","http://web.iitk.ac.in/infocell/iitk/newhtml/resttholidays.htm","",0,16,150);
		Menu18_4=new Array("Birds in IIT Kanpur","http://172.28.121.222/birdsite/index.html","",0,16,150);
		Menu18_5=new Array("Bus Schedule","http://web.iitk.ac.in/infocell/iitk/newhtml/bus.htm","",0,16,150);
		Menu18_6=new Array("Tender","http://www.iitk.ac.in/dord/dord_tender.htm","",0,16,150);

Menu19=new Array("","","",0,11);
	
Menu20=new Array("IIT Rajasthan","http://www.iitk.ac.in/iitj","",0,16,150); 
;;
		var fimage="http://www.iitk.ac.in/infocell/iitk/newhtml/images/pic1.jpg"
		var timage="http://www.iitk.ac.in/infocell/iitk/newhtml/images/pic2.jpg"
		var thimage="http://www.iitk.ac.in/infocell/iitk/newhtml/images/pic3.jpg"
		var frimage="http://www.iitk.ac.in/infocell/iitk/newhtml/images/pic4.jpg"
		var fvimage="http://www.iitk.ac.in/infocell/iitk/newhtml/images/pic5.jpg"
		var sxtimage="http://www.iitk.ac.in/infocell/iitk/newhtml/images/pic6.jpg"
		var seimage="http://www.iitk.ac.in/infocell/iitk/newhtml/images/pic7.jpg"
		var crntdate=new Date()
		var today=crntdate.getDay()
		if (today==1)
			document.write('<img src="'+fimage+'">')
		else if (today==2)
			document.write('<img src="'+timage+'">')
		else if (today==3)
			document.write('<img src="'+thimage+'">')
		else if (today==4)
			document.write('<img src="'+frimage+'">')
		else if (today==5)
			document.write('<img src="'+fvimage+'">')
		else if (today==6)
			document.write('<img src="'+sxtimage+'">')
		else
		document.write('<img src="'+seimage+'">')
		//-->
		;;