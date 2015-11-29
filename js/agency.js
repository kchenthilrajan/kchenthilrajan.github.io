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
									'<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: '+tech.value+'%;">'+
									'<span class="sr-only">80% Complete</span>'+
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
	[{label : 'HTML/CSS',fa_icon:'html5',content:'Experience in HTML5/CSS technologies'+
		'for more than 5 years.'},
	 {label : 'Javascript Technologies',fa_icon:'laptop',content:'Experience in HTML5/CSS technologies'+
		'for more than 5 years.'},
	 {label : 'Java/J2EE/REST',fa_icon:'coffee',content:'Java technologies'+
		'for more than 5 years.'}].forEach(function(service){
		$('#services>.container>.text-center').append(serviceTemplate(service));
	});
	
	//Append to the Technologies
	[{label:'HTML5',value:'88'},
	 {label:'CSS3',value:'90'},
	 {label:'Java',value:'90'},
	 {label:'J2EE',value:'90'},
	 {label:'SpringMVC',value:'90'},
	 {label:'AngulrJS',value:'75'}].forEach(function(tech){
		$('.portfolio-item .row').append(techTemplate(tech));
	});
	
	//Append to the Technologies
	[{image:'1',duration:'Sept 2014 - Till Date',
		project:'Advertisers Experience Platform (Software Engineer - UI/Javascript)',
		company:'Google Inc, Irvine,CA',
		body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'},
		{image:'2',duration:'July 2013 - Sept 2014',
		project:'Encounter Data Processing System (Full Stack Developer)',
		company:'Dynamic Healthcare, Irvine, CA',
		body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'},
		{image:'3',duration:'June 2012 - June 2013',
		project:'RSDVR Simulator (Java/J2EE Developer)',
		company:'Cablevision, Woodbridge, NY',
		body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'},
		{image:'4',duration:'Sept 2014 - Till Date',
		project:'Advertisers Experience Platform',
		company:'Google Inc, Irvine',
		body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'},
		{image:'5',duration:'Sept 2014 - Till Date',
		project:'Advertisers Experience Platform',
		company:'Google Inc, Irvine',
		body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'}
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


