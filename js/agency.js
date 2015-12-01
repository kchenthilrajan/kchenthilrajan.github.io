/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

	var serviceTemplate = (function(service){
		return function(service){
			return '<div class="col-md-4">'+
						'<span class="fa-stack fa-4x">'+
							'<i class="fa fa-circle fa-stack-2x text-primary"></i>'+
							'<i class="fa fa-'+service.fa_icon+' fa-stack-1x fa-inverse"></i>'+
						'</span>'+
						'<h4 class="service-heading">'+service.label+'</h4>'+
						'<p class="text-muted">'+service.content+'</p>'+
					'</div>';
		};
	})();
	
	var techTemplate = (function(tech){
		return function(tech){
			return '<div class="col-md-3 col-sm-3"><h4  class="subheading" style="text-transform: none;">'+tech.label+'</h4></div>'+
					'<div class="col-md-9 col-sm-9">'+
								'<div class="progress">'+
									'<div class="progress-bar progress-bar-success progress-bar-stripped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: '+(tech.value*10)+'%;">'+
									tech.value+
									'</div>'+
								'</div>'+
					'</div>';
		};
	})();
 
	var timelineTemplate = (function(timeline){
		var flip = true;
		return function(timeline){
			var liClass = flip?'<li>':'<li class="timeline-inverted">';
			flip = !flip;
			return liClass+
                            '<div class="timeline-image">'+
                                '<img class="img-circle img-responsive" src="img/about/'+timeline.image+'.jpg" alt="">'+
                            '</div>'+
                            '<div class="timeline-panel">'+
                                '<div class="timeline-heading">'+
                                    '<h5>'+timeline.duration+'</h5>'+
                                    '<h4 class="subheading">'+timeline.project+'</h4>'+
                                '</div>'+
                                '<div class="timeline-body">'+
									'<h4 class="subheading">'+timeline.company+'</h4>'+
                                    '<p class="text-muted">'+timeline.body+'</p>'+
                                '</div>'+
                            '</div>'+
                        '</li>';
		};
	
	})();
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 200, 'linear');
        event.preventDefault();
    });
	
	//Append to services
	[{label : 'HTML/CSS',fa_icon:'html5',content:'Got good exposure to UI, Performed slicing and dicing to convert a Photoshop design into a fully functional HTML, CSS and JS enabled website.	Worked on CSS Background/Positioning/Padding/Sprites, etc'},
	 {label : 'Javascript Technologies',fa_icon:'laptop',content:' Experience in Functional and Object Oriented Programming style of Javascript. Expertise in Full Web Stack libraries like AngularJS, UnderscoreJS, NodeJS, ExpressJS.'},
	 {label : 'Java/J2EE/REST',fa_icon:'coffee',content:'Expertise in Java/J2EE technologies like core Java, Servlets, SpringMVC, Hibernate,SOAP, WSDL, REST.'}].forEach(function(service){
		$('#services>.container>.text-center').append(serviceTemplate(service));
	});
	
	//Append to the Technologies
	[{label:'Javascript',value:8.5},
	{label:'HTML5',value:8.5},
	 {label:'CSS3',value:8.5},
	 {label:'AngularJS',value:7.5},
	 {label:'NodeJS',value:7.0},
	 {label:'jQquery',value:7.5},
	 {label:'Java',value:9.0},
	 {label:'J2EE',value:8.5},
	 {label:'SpringMVC',value:8.5},
	 {label:'Bootstrap',value:8.0},
	 {label:'RDBMS',value:8.0},
	 {label:'REST',value:8.5},
	 ].forEach(function(tech){
		$('.portfolio-item .row').append(techTemplate(tech));
	});
	
	//Append to the Technologies
	[{image:'1',duration:'Oct 2014 - Till Date',
		project:'Advertisers Experience Platform (Software Engineer - UI/Javascript)',
		company:'Google Inc, Irvine, CA',
		body:'AXP - Advertisers Experience Platform helps the client to reach out to the customers by sending customized emails.'},
		{image:'2',duration:'Sept 2012 - Sept 2014',
		project:'Encounter Data Processing System (Full Stack Developer)',
		company:'Dynamic Healthcare, Irvine, CA',
		body:'EDPS is a claims processing system which validates the healthcare claims for proper values/format as per the recommendation of Center for Medical Services.'},
		{image:'3',duration:'July 2011 - Sept 2012',
		project:'RSDVR Simulator (Java/J2EE Developer)',
		company:'Cablevision, Woodbridge, NY',
		body:'RSDVR Simulator is a web based test suite which simulates the behavior of a RSDVR(Cable box) to ease the testing process. The simulator can perform varying tests ranging from unit tests, functional tests and load tests, monitoring the feedback for the tests performed and also creates daily report'},
		{image:'4',duration:'Oct 2010 - July 2011',
		project:'REACH Westchester.',
		company:'Westchester County, White Plains, NY',
		body:'REACH Westchester provides assistance to recipients to complete their recertification interview online through an in-office kiosk or a web-based application. The step-by-step process makes it easier for the recipient and will save the county more than $2 million a year.'},
		{image:'5',duration:'Feb 2010 - Sept 2010',
		project:'Samsung USA News',
		company:'Samsung Electronics, Ridgefield Park, NJ',
		body:'Samsung USA News is an outlet for media professionals & consumers to follow news regarding new products & events'}
		].forEach(function(tech){
		$('.timeline').append(timelineTemplate(tech));
	});
	
	
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
