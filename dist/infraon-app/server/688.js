"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=688,exports.ids=[688],exports.modules={48688:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ContactUsModule:()=>ContactUsModule});var common=__webpack_require__(69808),router=__webpack_require__(74202),core=__webpack_require__(5e3),fesm2015_forms=__webpack_require__(93075),ngx_intl_tel_input=__webpack_require__(59902),platform_browser=__webpack_require__(22313),canonical_service=__webpack_require__(86584),loader_component=__webpack_require__(52856);function ContactUsComponent_p_62_span_1_Template(rf,ctx){1&rf&&(core.TgZ(0,"span"),core._uU(1,"First name is required."),core.qZA())}function ContactUsComponent_p_62_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"p",49),core.YNc(1,ContactUsComponent_p_62_span_1_Template,2,0,"span",50),core.qZA()),2&rf){const ctx_r0=core.oxw();core.xp6(1),core.Q6J("ngIf",ctx_r0.f.first_name.errors.required)}}function ContactUsComponent_p_68_span_1_Template(rf,ctx){1&rf&&(core.TgZ(0,"span"),core._uU(1,"Last name is required."),core.qZA())}function ContactUsComponent_p_68_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"p",49),core.YNc(1,ContactUsComponent_p_68_span_1_Template,2,0,"span",50),core.qZA()),2&rf){const ctx_r1=core.oxw();core.xp6(1),core.Q6J("ngIf",ctx_r1.f.last_name.errors.required)}}function ContactUsComponent_p_78_span_1_Template(rf,ctx){1&rf&&(core.TgZ(0,"span"),core._uU(1,"Contact number is required."),core.qZA())}function ContactUsComponent_p_78_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"p",49),core.YNc(1,ContactUsComponent_p_78_span_1_Template,2,0,"span",50),core.qZA()),2&rf){const ctx_r2=core.oxw();core.xp6(1),core.Q6J("ngIf",ctx_r2.f.phone.errors.required)}}function ContactUsComponent_p_87_span_1_Template(rf,ctx){1&rf&&(core.TgZ(0,"span"),core._uU(1,"Email is required."),core.qZA())}function ContactUsComponent_p_87_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"p",49),core.YNc(1,ContactUsComponent_p_87_span_1_Template,2,0,"span",50),core.qZA()),2&rf){const ctx_r3=core.oxw();core.xp6(1),core.Q6J("ngIf",ctx_r3.f.email.errors.required)}}function ContactUsComponent_p_96_span_1_Template(rf,ctx){1&rf&&(core.TgZ(0,"span"),core._uU(1,"Company name is required."),core.qZA())}function ContactUsComponent_p_96_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"p",49),core.YNc(1,ContactUsComponent_p_96_span_1_Template,2,0,"span",50),core.qZA()),2&rf){const ctx_r4=core.oxw();core.xp6(1),core.Q6J("ngIf",ctx_r4.f.company.errors.required)}}function ContactUsComponent_p_103_span_1_Template(rf,ctx){1&rf&&(core.TgZ(0,"span"),core._uU(1,"Your message is required."),core.qZA())}function ContactUsComponent_p_103_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"p",49),core.YNc(1,ContactUsComponent_p_103_span_1_Template,2,0,"span",50),core.qZA()),2&rf){const ctx_r5=core.oxw();core.xp6(1),core.Q6J("ngIf",ctx_r5.f.description.errors.required)}}function ContactUsComponent_div_131_Template(rf,ctx){1&rf&&(core.TgZ(0,"div",51),core._uU(1," Thank you for enquiring with us. We will get in touch with you soon.\n"),core.qZA())}__name(ContactUsComponent_p_62_span_1_Template,"ContactUsComponent_p_62_span_1_Template"),__name(ContactUsComponent_p_62_Template,"ContactUsComponent_p_62_Template"),__name(ContactUsComponent_p_68_span_1_Template,"ContactUsComponent_p_68_span_1_Template"),__name(ContactUsComponent_p_68_Template,"ContactUsComponent_p_68_Template"),__name(ContactUsComponent_p_78_span_1_Template,"ContactUsComponent_p_78_span_1_Template"),__name(ContactUsComponent_p_78_Template,"ContactUsComponent_p_78_Template"),__name(ContactUsComponent_p_87_span_1_Template,"ContactUsComponent_p_87_span_1_Template"),__name(ContactUsComponent_p_87_Template,"ContactUsComponent_p_87_Template"),__name(ContactUsComponent_p_96_span_1_Template,"ContactUsComponent_p_96_span_1_Template"),__name(ContactUsComponent_p_96_Template,"ContactUsComponent_p_96_Template"),__name(ContactUsComponent_p_103_span_1_Template,"ContactUsComponent_p_103_span_1_Template"),__name(ContactUsComponent_p_103_Template,"ContactUsComponent_p_103_Template"),__name(ContactUsComponent_div_131_Template,"ContactUsComponent_div_131_Template");const _c0=__name(function(a0,a1){return[a0,a1]},"_c0");class ContactUsComponent{constructor(titleService,_metaTagService,_canonical,fb,platformId){this.titleService=titleService,this._metaTagService=_metaTagService,this._canonical=_canonical,this.fb=fb,this.platformId=platformId,this.codes=[],this.product=["Infraon Asset","Infraon Uptime","Infraon ITIM","Infraon NMS","Infraon NCCM","Infraon AIOps","Infraon Helpdesk","Infraon ITSM","Infraon Desk","Infraon SecuRA","Infraon OSS","Infraon IMS"],this.selectedProduct=[],this.success=!1,this.submitted=!1,this.separateDialCode=!0,this.SearchCountryField=ngx_intl_tel_input.wX,this.TooltipLabel=ngx_intl_tel_input.uw,this.CountryISO=ngx_intl_tel_input.HT,this.preferredCountries=[ngx_intl_tel_input.HT.UnitedStates,ngx_intl_tel_input.HT.UnitedKingdom],(0,common.NF)(this.platformId)&&localStorage.setItem("pageType","non-product"),this.titleService.setTitle("Contact us"),this._metaTagService.updateTag({name:"title",content:"Contact Us"}),this._metaTagService.updateTag({name:"description",content:"contact us"}),this._canonical.updateCanonicalUrl("contact.com/"),this.createForm()}createForm(){this.angForm=this.fb.group({first_name:["",fesm2015_forms.kI.required],last_name:[""],phone:["",fesm2015_forms.kI.required],email:["",fesm2015_forms.kI.required,fesm2015_forms.kI.email],company:["",fesm2015_forms.kI.required],description:[""]})}get f(){return this.angForm.controls}onSubmit(){if(this.submitted=!0,console.log(this.angForm.controls.phone.value.internationalNumber),this.angForm.errors||this.angForm.invalid)console.log(this.angForm.errors);else{var new_contact={"First name":this.angForm.controls.first_name.value,"Last name":this.angForm.controls.last_name.value,Email:this.angForm.controls.email.value,"Alternate contact number":this.angForm.controls.phone.value.internationalNumber,company:{Name:this.angForm.controls.company.value,Website:this.angForm.controls.description.value}},identifier=this.angForm.controls.first_name.value;fwcrm.identify(identifier,new_contact),setTimeout(()=>{this.success=!0},500),setTimeout(()=>{this.success=!1,this.angForm.reset(),this.phoneNumber=null,this.first_name=null,this.last_name=null,this.email=null,this.company=null,this.description=null},3e3)}}ngOnInit(){(0,common.NF)(this.platformId)&&window.scrollTo(0,0)}}__name(ContactUsComponent,"ContactUsComponent"),ContactUsComponent.\u0275fac=__name(function(t){return new(t||ContactUsComponent)(core.Y36(platform_browser.Dx),core.Y36(platform_browser.h_),core.Y36(canonical_service.z),core.Y36(fesm2015_forms.qu),core.Y36(core.Lbi))},"ContactUsComponent_Factory"),ContactUsComponent.\u0275cmp=core.Xpm({type:ContactUsComponent,selectors:[["app-contact-us"]],decls:132,vars:29,consts:[[1,"header-section","p-lr-120","p-tb-60","bg-grey"],[1,"header-title","text-center","mb-5"],[1,"header-desc","text-center"],[1,"p-120"],[1,"section-title","text-center"],[1,"section-paragraph","text-center"],[1,"p-lr-120"],[1,"row","mx-0"],[1,"col-xl-6","col-lg-6","col-md-12","col-sm-12","col-xs-12"],["src","./../../../assets/img/feature-icons/headphones-outline.svg","alt",""],[1,"section-title","my-3",2,"font-size","36px!important"],[1,"section-paragraph"],[1,"p-tb-60"],["src","./../../../assets/img/feature-icons/call-outline.svg","alt",""],["routerLink","/support"],[1,"section-paragraph","primary-color"],["src","./../../../assets/img/feature-icons/users-outline.svg","alt",""],[1,"section-title","mb-0",2,"font-size","36px!important"],["novalidate","",3,"formGroup","ngSubmit"],[1,"row","my-5"],[1,"col-lg-6","col-md-12","col-sm-12","col-xs-12"],[1,"form-group","text-left"],["for","first_name",1,"input-label","mb-3"],[1,"text-danger"],["type","text","id","first_name","name","first_name","formControlName","first_name","placeholder","Enter your first name",1,"form-control",3,"ngModel","ngModelChange"],["class","text-left text-danger",4,"ngIf"],["for","last_name",1,"input-label","mb-3"],["type","text","id","last_name","formControlName","last_name","placeholder","Enter your last name",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-12"],["for","phone",1,"input-label","mb-3"],[1,"d-flex"],["id","phoneNumber","name","phone","formControlName","phone",2,"width","100%",3,"cssClass","preferredCountries","enableAutoCountrySelect","enablePlaceholder","searchCountryFlag","searchCountryField","selectFirstCountry","selectedCountryISO","tooltipField","phoneValidation","separateDialCode","ngModel","ngModelChange"],["for","email",1,"input-label","mb-3"],["type","email","id","email","formControlName","email","placeholder","Enter your email",1,"form-control",3,"ngModel","ngModelChange"],["for","company",1,"input-label","mb-3"],["type","text","id","company","formControlName","company","placeholder","Enter your company name",1,"form-control",3,"ngModel","ngModelChange"],["for","description",1,"input-label","mb-3"],["name","description","id","description","placeholder","Enter your message","formControlName","description","cols","50",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"primary-button",2,"border","none","outline","none",3,"disabled"],[1,"section-title","text-center","p-b-60"],[1,"row","mx-0","justify-content-center"],[1,"col-xl-4","col-lg-4","col-md-12","col-sm-12","col-xs-12"],["src","./../../../assets/img/usa-flag.png","alt","",2,"max-width","40px"],[1,"section-title-s","text-start","my-3"],[1,"section-paragraph-s","text-start"],[2,"font-weight","400","font-size","16px","color","grey"],["src","./../../../assets/img/indian-flag.png","alt","",2,"max-width","40px"],[1,"section-title-s","text-start","my-3",2,"font-weight","normal"],["class","alert alert-success","role","alert","style","position: fixed;bottom: 30px;right: 50px;",4,"ngIf"],[1,"text-left","text-danger"],[4,"ngIf"],["role","alert",1,"alert","alert-success",2,"position","fixed","bottom","30px","right","50px"]],template:__name(function(rf,ctx){1&rf&&(core._UZ(0,"app-loader"),core.TgZ(1,"section",0)(2,"h1",1),core._uU(3,"Contact Us"),core.qZA(),core.TgZ(4,"p",2),core._uU(5,"Stay alert about your networks & servers with a high device availability platform."),core.qZA()(),core.TgZ(6,"section",3)(7,"h2",4),core._uU(8,"We\u2019d Love To Hear From You"),core.qZA(),core.TgZ(9,"p",5),core._uU(10,"Whether you have a question about features, trials, pricing, need a demo, or anything else, our team is ready to answer all your questions.Please use the contact details and/or form below to get in touch with us for sales, support of general enquiries."),core.qZA()(),core.TgZ(11,"section",6)(12,"div",7)(13,"div",8)(14,"div"),core._UZ(15,"img",9),core.TgZ(16,"h2",10),core._uU(17,"Sales Enquiries"),core.qZA(),core.TgZ(18,"p",11),core._uU(19,"Interested in any of our products? Talk to our experts today"),core.qZA(),core.TgZ(20,"p",11)(21,"b"),core._uU(22,"US"),core.qZA(),core._uU(23," +1 40925 75123"),core.qZA(),core.TgZ(24,"p",11)(25,"b"),core._uU(26,"Email"),core.qZA(),core._uU(27," sales@infraon.io"),core.qZA()(),core.TgZ(28,"div",12),core._UZ(29,"img",13),core.TgZ(30,"h2",10),core._uU(31,"Support Enquiries"),core.qZA(),core.TgZ(32,"p",11),core._uU(33,"Using any of our products and need help? Get in touch with customer support"),core.qZA(),core.TgZ(34,"a",14)(35,"p",15),core._uU(36,"Get support"),core.qZA()()(),core.TgZ(37,"div"),core._UZ(38,"img",16),core.TgZ(39,"h2",10),core._uU(40,"Partner Enquiries"),core.qZA(),core.TgZ(41,"p",11),core._uU(42,"Looking for our partners?"),core.qZA(),core.TgZ(43,"p",11),core._uU(44,"Browse our partner directory"),core.qZA(),core.TgZ(45,"a",14)(46,"p",15),core._uU(47,"Find a partner"),core.qZA()()()(),core.TgZ(48,"div",8)(49,"h2",17),core._uU(50,"Drop us a message"),core.qZA(),core.TgZ(51,"p",11),core._uU(52,"Any question and remark. Just write us a message"),core.qZA(),core.TgZ(53,"form",18),core.NdJ("ngSubmit",__name(function(){return ctx.onSubmit()},"ContactUsComponent_Template_form_ngSubmit_53_listener")),core.TgZ(54,"div",19)(55,"div",20)(56,"div",21)(57,"label",22),core._uU(58,"First Name "),core.TgZ(59,"span",23),core._uU(60,"*"),core.qZA()(),core.TgZ(61,"input",24),core.NdJ("ngModelChange",__name(function($event){return ctx.first_name=$event},"ContactUsComponent_Template_input_ngModelChange_61_listener")),core.qZA()(),core.YNc(62,ContactUsComponent_p_62_Template,2,1,"p",25),core.qZA(),core.TgZ(63,"div",20)(64,"div",21)(65,"label",26),core._uU(66,"Last Name"),core.qZA(),core.TgZ(67,"input",27),core.NdJ("ngModelChange",__name(function($event){return ctx.last_name=$event},"ContactUsComponent_Template_input_ngModelChange_67_listener")),core.qZA()(),core.YNc(68,ContactUsComponent_p_68_Template,2,1,"p",25),core.qZA()(),core.TgZ(69,"div",19)(70,"div",28)(71,"div",21)(72,"label",29),core._uU(73,"Phone number "),core.TgZ(74,"span",23),core._uU(75,"*"),core.qZA()(),core.TgZ(76,"div",30)(77,"ngx-intl-tel-input",31),core.NdJ("ngModelChange",__name(function($event){return ctx.phoneNumber=$event},"ContactUsComponent_Template_ngx_intl_tel_input_ngModelChange_77_listener")),core.qZA()()(),core.YNc(78,ContactUsComponent_p_78_Template,2,1,"p",25),core.qZA()(),core.TgZ(79,"div",19)(80,"div",28)(81,"div",21)(82,"label",32),core._uU(83,"Email "),core.TgZ(84,"span",23),core._uU(85,"*"),core.qZA()(),core.TgZ(86,"input",33),core.NdJ("ngModelChange",__name(function($event){return ctx.email=$event},"ContactUsComponent_Template_input_ngModelChange_86_listener")),core.qZA()(),core.YNc(87,ContactUsComponent_p_87_Template,2,1,"p",25),core.qZA()(),core.TgZ(88,"div",19)(89,"div",28)(90,"div",21)(91,"label",34),core._uU(92,"Company "),core.TgZ(93,"span",23),core._uU(94,"*"),core.qZA()(),core.TgZ(95,"input",35),core.NdJ("ngModelChange",__name(function($event){return ctx.company=$event},"ContactUsComponent_Template_input_ngModelChange_95_listener")),core.qZA()(),core.YNc(96,ContactUsComponent_p_96_Template,2,1,"p",25),core.qZA()(),core.TgZ(97,"div",19)(98,"div",28)(99,"div",21)(100,"label",36),core._uU(101,"Enter your message"),core.qZA(),core.TgZ(102,"textarea",37),core.NdJ("ngModelChange",__name(function($event){return ctx.description=$event},"ContactUsComponent_Template_textarea_ngModelChange_102_listener")),core.qZA()(),core.YNc(103,ContactUsComponent_p_103_Template,2,1,"p",25),core.qZA()(),core.TgZ(104,"button",38),core._uU(105,"Submit"),core.qZA()()()()(),core.TgZ(106,"section",3)(107,"h2",39),core._uU(108,"Office Locations"),core.qZA(),core.TgZ(109,"div",40)(110,"div",41),core._UZ(111,"img",42),core.TgZ(112,"p",43)(113,"b"),core._uU(114,"Infraon Corp."),core.qZA()(),core.TgZ(115,"p",44),core._uU(116,"611 Gateway Blvd, Suite 120, "),core._UZ(117,"br"),core._uU(118," South San Francisco, California, 94080, United States"),core.qZA(),core.TgZ(119,"p",45),core._uU(120,"CA, United States of America"),core.qZA()(),core.TgZ(121,"div",41),core._UZ(122,"img",46),core.TgZ(123,"p",47),core._uU(124,"Bengaluru, India"),core.qZA(),core.TgZ(125,"p",44),core._uU(126,"3rd Floor, dollar Layout 15th cross, 4th phase, "),core._UZ(127,"br"),core._uU(128," J P Nagar Bengaluru-560078, Karnataka, India"),core.qZA(),core.TgZ(129,"p",45),core._uU(130,"Bengaluru, India"),core.qZA()()()(),core.YNc(131,ContactUsComponent_div_131_Template,2,0,"div",48)),2&rf&&(core.xp6(53),core.Q6J("formGroup",ctx.angForm),core.xp6(8),core.Q6J("ngModel",ctx.first_name),core.xp6(1),core.Q6J("ngIf",ctx.submitted&&ctx.f.first_name.errors),core.xp6(5),core.Q6J("ngModel",ctx.last_name),core.xp6(1),core.Q6J("ngIf",ctx.submitted&&ctx.f.last_name.errors),core.xp6(9),core.Q6J("cssClass","custom")("preferredCountries",ctx.preferredCountries)("enableAutoCountrySelect",!1)("enablePlaceholder",!0)("searchCountryFlag",!0)("searchCountryField",core.WLB(26,_c0,ctx.SearchCountryField.Iso2,ctx.SearchCountryField.Name))("selectFirstCountry",!1)("selectedCountryISO",ctx.CountryISO.UnitedStates)("tooltipField",ctx.TooltipLabel.Name)("phoneValidation",!0)("separateDialCode",ctx.separateDialCode)("ngModel",ctx.phoneNumber),core.xp6(1),core.Q6J("ngIf",ctx.submitted&&ctx.f.phone.errors),core.xp6(8),core.Q6J("ngModel",ctx.email),core.xp6(1),core.Q6J("ngIf",ctx.submitted&&ctx.f.email.errors),core.xp6(8),core.Q6J("ngModel",ctx.company),core.xp6(1),core.Q6J("ngIf",ctx.submitted&&ctx.f.company.errors),core.xp6(6),core.Q6J("ngModel",ctx.description),core.xp6(1),core.Q6J("ngIf",ctx.submitted&&ctx.f.description.errors),core.xp6(1),core.Q6J("disabled",!1),core.xp6(27),core.Q6J("ngIf",ctx.success))},"ContactUsComponent_Template"),directives:[loader_component.R,router.yS,fesm2015_forms._Y,fesm2015_forms.JL,fesm2015_forms.sg,fesm2015_forms.Fj,fesm2015_forms.JJ,fesm2015_forms.u,common.O5,ngx_intl_tel_input.FV],styles:[".header-section[_ngcontent-%COMP%]{background-image:url(contact-us.98f21489b06c3879.svg),url(product-header-bg-right.483fe3575da44d94.svg);background-size:inherit,contain;background-repeat:no-repeat,no-repeat;margin-top:54px;background-position:right bottom,left center;background-color:#fafafa}"]});const routes=[{path:"",component:ContactUsComponent}];class ContactUsRoutingModule{}__name(ContactUsRoutingModule,"ContactUsRoutingModule"),ContactUsRoutingModule.\u0275fac=__name(function(t){return new(t||ContactUsRoutingModule)},"ContactUsRoutingModule_Factory"),ContactUsRoutingModule.\u0275mod=core.oAB({type:ContactUsRoutingModule}),ContactUsRoutingModule.\u0275inj=core.cJS({imports:[[router.Bz.forChild(routes)],router.Bz]});var loader_module=__webpack_require__(94999),http=__webpack_require__(40520);class ContactUsModule{}__name(ContactUsModule,"ContactUsModule"),ContactUsModule.\u0275fac=__name(function(t){return new(t||ContactUsModule)},"ContactUsModule_Factory"),ContactUsModule.\u0275mod=core.oAB({type:ContactUsModule}),ContactUsModule.\u0275inj=core.cJS({imports:[[common.ez,ContactUsRoutingModule,loader_module.q,fesm2015_forms.u5,fesm2015_forms.UX,http.JF,ngx_intl_tel_input.J7]]})}};