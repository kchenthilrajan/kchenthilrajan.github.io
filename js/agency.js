
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
                            '<div class="timeline-panel">'+
                                '<div class="timeline-heading">'+
                                    '<h5>'+timeline.duration+'</h5>'+
									'<h5 class="subheading">'+timeline.company+'</h5>'+
                                    '<h4 class="subheading">'+timeline.role+'</h4>'+
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
	[
		{ label: 'Javascript/ReactJS', fa_icon: 'laptop', 
			content: ' Experience in Functional and Object Oriented Programming style of Javascript.' },
		{ label: 'Java/REST', fa_icon: 'coffee', content: 'Expertise in Java/J2EE technologies.' },
		{ label: 'HTML/CSS', fa_icon: 'html5', content: 'Got good exposure to UI, HTML, CSS and JS enabled website.' }].forEach(function (service) {
		$('#services>.container>.text-center').append(serviceTemplate(service));
	});
	
	//Append to the Technologies
	[{label:'Javascript',value:8.0},
	 {label:'React JS',value:8.5},
	 {label:'Java/J2EE',value:8.5},
	 {label:'API/REST',value:8.5},
	 {label:'HTML5',value:8.0},
	 {label:'CSS3',value:7.5},
	 {label:'NodeJS',value:7.0},
	 ].forEach(function(tech){
		$('.portfolio-item .row').append(techTemplate(tech));
	});
	
	//Append to the Technologies
	[
		{
			image:'1',
			duration:'July 2019 - Till Date',
			role:'Senior Software Engineer(Frontend)',
			company:'Valtix, Santa Clara, CA',
		},
		{
			image:'2',
			duration:'Dec 2018 - July 2019',
			role:'Senior Full Stack Developer',
			company:'Walmart Labs, Sunnyvale, CA',
		},
		{
			image:'3',
			duration:'Mar 2016 - Dec 2018',
			role:'Senior Software Engineer',
			company:'Equinix, Sunnyvale, CA',
		},
		{
			image:'4',
			duration:'Sep 2012 - Mar 2016',
			role: 'Senior Software Engineer',
			company:'Dynamic Healthcare Services, Irvine, CA',
		},
		{
			image:'5',
			duration:'July 2011 - Sep 2012',
			role: 'Senior Software Engineer',
			company:'CableVision, Long Island, NY',
		}
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
