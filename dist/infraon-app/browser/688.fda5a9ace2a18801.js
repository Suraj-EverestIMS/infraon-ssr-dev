"use strict";(self.webpackChunkinfraon_app=self.webpackChunkinfraon_app||[]).push([[688],{8688:(Y,m,s)=>{s.r(m),s.d(m,{ContactUsModule:()=>w});var p=s(9808),c=s(1316),e=s(4893),r=s(2382),u=s(9902),d=s(2313),g=s(6584),f=s(2856);function h(t,a){1&t&&(e.TgZ(0,"span"),e._uU(1,"First name is required."),e.qZA())}function _(t,a){if(1&t&&(e.TgZ(0,"p",49),e.YNc(1,h,2,0,"span",50),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Q6J("ngIf",o.f.first_name.errors.required)}}function Z(t,a){1&t&&(e.TgZ(0,"span"),e._uU(1,"Last name is required."),e.qZA())}function C(t,a){if(1&t&&(e.TgZ(0,"p",49),e.YNc(1,Z,2,0,"span",50),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Q6J("ngIf",o.f.last_name.errors.required)}}function T(t,a){1&t&&(e.TgZ(0,"span"),e._uU(1,"Contact number is required."),e.qZA())}function U(t,a){if(1&t&&(e.TgZ(0,"p",49),e.YNc(1,T,2,0,"span",50),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Q6J("ngIf",o.f.phone.errors.required)}}function y(t,a){1&t&&(e.TgZ(0,"span"),e._uU(1,"Email is required."),e.qZA())}function b(t,a){if(1&t&&(e.TgZ(0,"p",49),e.YNc(1,y,2,0,"span",50),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Q6J("ngIf",o.f.email.errors.required)}}function q(t,a){1&t&&(e.TgZ(0,"span"),e._uU(1,"Company name is required."),e.qZA())}function v(t,a){if(1&t&&(e.TgZ(0,"p",49),e.YNc(1,q,2,0,"span",50),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Q6J("ngIf",o.f.company.errors.required)}}function A(t,a){1&t&&(e.TgZ(0,"span"),e._uU(1,"Your message is required."),e.qZA())}function x(t,a){if(1&t&&(e.TgZ(0,"p",49),e.YNc(1,A,2,0,"span",50),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Q6J("ngIf",o.f.description.errors.required)}}function I(t,a){1&t&&(e.TgZ(0,"div",51),e._uU(1," Thank you for enquiring with us. We will get in touch with you soon.\n"),e.qZA())}const F=function(t,a){return[t,a]},M=[{path:"",component:(()=>{class t{constructor(o,n,l,i,Q){this.titleService=o,this._metaTagService=n,this._canonical=l,this.fb=i,this.platformId=Q,this.codes=[],this.product=["Infraon Asset","Infraon Uptime","Infraon ITIM","Infraon NMS","Infraon NCCM","Infraon AIOps","Infraon Helpdesk","Infraon ITSM","Infraon Desk","Infraon SecuRA","Infraon OSS","Infraon IMS"],this.selectedProduct=[],this.success=!1,this.submitted=!1,this.separateDialCode=!0,this.SearchCountryField=u.wX,this.TooltipLabel=u.uw,this.CountryISO=u.HT,this.preferredCountries=[u.HT.UnitedStates,u.HT.UnitedKingdom],(0,p.NF)(this.platformId)&&localStorage.setItem("pageType","non-product"),this.titleService.setTitle("Contact us"),this._metaTagService.updateTag({name:"title",content:"Contact Us"}),this._metaTagService.updateTag({name:"description",content:"contact us"}),this._canonical.updateCanonicalUrl("contact.com/"),this.createForm()}createForm(){this.angForm=this.fb.group({first_name:["",r.kI.required],last_name:[""],phone:["",r.kI.required],email:["",r.kI.required,r.kI.email],company:["",r.kI.required],description:[""]})}get f(){return this.angForm.controls}onSubmit(){this.submitted=!0,console.log(this.angForm.controls.phone.value.internationalNumber),this.angForm.errors||this.angForm.invalid?console.log(this.angForm.errors):(fwcrm.identify(this.angForm.controls.first_name.value,{"First name":this.angForm.controls.first_name.value,"Last name":this.angForm.controls.last_name.value,Email:this.angForm.controls.email.value,"Alternate contact number":this.angForm.controls.phone.value.internationalNumber,company:{Name:this.angForm.controls.company.value,Website:this.angForm.controls.description.value}}),setTimeout(()=>{this.success=!0},500),setTimeout(()=>{this.success=!1,this.angForm.reset(),this.phoneNumber=null,this.first_name=null,this.last_name=null,this.email=null,this.company=null,this.description=null},3e3))}ngOnInit(){(0,p.NF)(this.platformId)&&window.scrollTo(0,0)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(d.Dx),e.Y36(d.h_),e.Y36(g.z),e.Y36(r.qu),e.Y36(e.Lbi))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-contact-us"]],decls:132,vars:29,consts:[[1,"header-section","p-lr-120","p-tb-60","bg-grey"],[1,"header-title","text-center","mb-5"],[1,"header-desc","text-center"],[1,"p-120"],[1,"section-title","text-center"],[1,"section-paragraph","text-center"],[1,"p-lr-120"],[1,"row","mx-0"],[1,"col-xl-6","col-lg-6","col-md-12","col-sm-12","col-xs-12"],["src","./../../../assets/img/feature-icons/headphones-outline.svg","alt",""],[1,"section-title","my-3",2,"font-size","36px!important"],[1,"section-paragraph"],[1,"p-tb-60"],["src","./../../../assets/img/feature-icons/call-outline.svg","alt",""],["routerLink","/support"],[1,"section-paragraph","primary-color"],["src","./../../../assets/img/feature-icons/users-outline.svg","alt",""],[1,"section-title","mb-0",2,"font-size","36px!important"],["novalidate","",3,"formGroup","ngSubmit"],[1,"row","my-5"],[1,"col-lg-6","col-md-12","col-sm-12","col-xs-12"],[1,"form-group","text-left"],["for","first_name",1,"input-label","mb-3"],[1,"text-danger"],["type","text","id","first_name","name","first_name","formControlName","first_name","placeholder","Enter your first name",1,"form-control",3,"ngModel","ngModelChange"],["class","text-left text-danger",4,"ngIf"],["for","last_name",1,"input-label","mb-3"],["type","text","id","last_name","formControlName","last_name","placeholder","Enter your last name",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-12"],["for","phone",1,"input-label","mb-3"],[1,"d-flex"],["id","phoneNumber","name","phone","formControlName","phone",2,"width","100%",3,"cssClass","preferredCountries","enableAutoCountrySelect","enablePlaceholder","searchCountryFlag","searchCountryField","selectFirstCountry","selectedCountryISO","tooltipField","phoneValidation","separateDialCode","ngModel","ngModelChange"],["for","email",1,"input-label","mb-3"],["type","email","id","email","formControlName","email","placeholder","Enter your email",1,"form-control",3,"ngModel","ngModelChange"],["for","company",1,"input-label","mb-3"],["type","text","id","company","formControlName","company","placeholder","Enter your company name",1,"form-control",3,"ngModel","ngModelChange"],["for","description",1,"input-label","mb-3"],["name","description","id","description","placeholder","Enter your message","formControlName","description","cols","50",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"primary-button",2,"border","none","outline","none",3,"disabled"],[1,"section-title","text-center","p-b-60"],[1,"row","mx-0","justify-content-center"],[1,"col-xl-4","col-lg-4","col-md-12","col-sm-12","col-xs-12"],["src","./../../../assets/img/usa-flag.png","alt","",2,"max-width","40px"],[1,"section-title-s","text-start","my-3"],[1,"section-paragraph-s","text-start"],[2,"font-weight","400","font-size","16px","color","grey"],["src","./../../../assets/img/indian-flag.png","alt","",2,"max-width","40px"],[1,"section-title-s","text-start","my-3",2,"font-weight","normal"],["class","alert alert-success","role","alert","style","position: fixed;bottom: 30px;right: 50px;",4,"ngIf"],[1,"text-left","text-danger"],[4,"ngIf"],["role","alert",1,"alert","alert-success",2,"position","fixed","bottom","30px","right","50px"]],template:function(o,n){1&o&&(e._UZ(0,"app-loader"),e.TgZ(1,"section",0)(2,"h1",1),e._uU(3,"Contact Us"),e.qZA(),e.TgZ(4,"p",2),e._uU(5,"Stay alert about your networks & servers with a high device availability platform."),e.qZA()(),e.TgZ(6,"section",3)(7,"h2",4),e._uU(8,"We\u2019d Love To Hear From You"),e.qZA(),e.TgZ(9,"p",5),e._uU(10,"Whether you have a question about features, trials, pricing, need a demo, or anything else, our team is ready to answer all your questions.Please use the contact details and/or form below to get in touch with us for sales, support of general enquiries."),e.qZA()(),e.TgZ(11,"section",6)(12,"div",7)(13,"div",8)(14,"div"),e._UZ(15,"img",9),e.TgZ(16,"h2",10),e._uU(17,"Sales Enquiries"),e.qZA(),e.TgZ(18,"p",11),e._uU(19,"Interested in any of our products? Talk to our experts today"),e.qZA(),e.TgZ(20,"p",11)(21,"b"),e._uU(22,"US"),e.qZA(),e._uU(23," +1 40925 75123"),e.qZA(),e.TgZ(24,"p",11)(25,"b"),e._uU(26,"Email"),e.qZA(),e._uU(27," sales@infraon.io"),e.qZA()(),e.TgZ(28,"div",12),e._UZ(29,"img",13),e.TgZ(30,"h2",10),e._uU(31,"Support Enquiries"),e.qZA(),e.TgZ(32,"p",11),e._uU(33,"Using any of our products and need help? Get in touch with customer support"),e.qZA(),e.TgZ(34,"a",14)(35,"p",15),e._uU(36,"Get support"),e.qZA()()(),e.TgZ(37,"div"),e._UZ(38,"img",16),e.TgZ(39,"h2",10),e._uU(40,"Partner Enquiries"),e.qZA(),e.TgZ(41,"p",11),e._uU(42,"Looking for our partners?"),e.qZA(),e.TgZ(43,"p",11),e._uU(44,"Browse our partner directory"),e.qZA(),e.TgZ(45,"a",14)(46,"p",15),e._uU(47,"Find a partner"),e.qZA()()()(),e.TgZ(48,"div",8)(49,"h2",17),e._uU(50,"Drop us a message"),e.qZA(),e.TgZ(51,"p",11),e._uU(52,"Any question and remark. Just write us a message"),e.qZA(),e.TgZ(53,"form",18),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(54,"div",19)(55,"div",20)(56,"div",21)(57,"label",22),e._uU(58,"First Name "),e.TgZ(59,"span",23),e._uU(60,"*"),e.qZA()(),e.TgZ(61,"input",24),e.NdJ("ngModelChange",function(i){return n.first_name=i}),e.qZA()(),e.YNc(62,_,2,1,"p",25),e.qZA(),e.TgZ(63,"div",20)(64,"div",21)(65,"label",26),e._uU(66,"Last Name"),e.qZA(),e.TgZ(67,"input",27),e.NdJ("ngModelChange",function(i){return n.last_name=i}),e.qZA()(),e.YNc(68,C,2,1,"p",25),e.qZA()(),e.TgZ(69,"div",19)(70,"div",28)(71,"div",21)(72,"label",29),e._uU(73,"Phone number "),e.TgZ(74,"span",23),e._uU(75,"*"),e.qZA()(),e.TgZ(76,"div",30)(77,"ngx-intl-tel-input",31),e.NdJ("ngModelChange",function(i){return n.phoneNumber=i}),e.qZA()()(),e.YNc(78,U,2,1,"p",25),e.qZA()(),e.TgZ(79,"div",19)(80,"div",28)(81,"div",21)(82,"label",32),e._uU(83,"Email "),e.TgZ(84,"span",23),e._uU(85,"*"),e.qZA()(),e.TgZ(86,"input",33),e.NdJ("ngModelChange",function(i){return n.email=i}),e.qZA()(),e.YNc(87,b,2,1,"p",25),e.qZA()(),e.TgZ(88,"div",19)(89,"div",28)(90,"div",21)(91,"label",34),e._uU(92,"Company "),e.TgZ(93,"span",23),e._uU(94,"*"),e.qZA()(),e.TgZ(95,"input",35),e.NdJ("ngModelChange",function(i){return n.company=i}),e.qZA()(),e.YNc(96,v,2,1,"p",25),e.qZA()(),e.TgZ(97,"div",19)(98,"div",28)(99,"div",21)(100,"label",36),e._uU(101,"Enter your message"),e.qZA(),e.TgZ(102,"textarea",37),e.NdJ("ngModelChange",function(i){return n.description=i}),e.qZA()(),e.YNc(103,x,2,1,"p",25),e.qZA()(),e.TgZ(104,"button",38),e._uU(105,"Submit"),e.qZA()()()()(),e.TgZ(106,"section",3)(107,"h2",39),e._uU(108,"Office Locations"),e.qZA(),e.TgZ(109,"div",40)(110,"div",41),e._UZ(111,"img",42),e.TgZ(112,"p",43)(113,"b"),e._uU(114,"Infraon Corp."),e.qZA()(),e.TgZ(115,"p",44),e._uU(116,"611 Gateway Blvd, Suite 120, "),e._UZ(117,"br"),e._uU(118," South San Francisco, California, 94080, United States"),e.qZA(),e.TgZ(119,"p",45),e._uU(120,"CA, United States of America"),e.qZA()(),e.TgZ(121,"div",41),e._UZ(122,"img",46),e.TgZ(123,"p",47),e._uU(124,"Bengaluru, India"),e.qZA(),e.TgZ(125,"p",44),e._uU(126,"3rd Floor, dollar Layout 15th cross, 4th phase, "),e._UZ(127,"br"),e._uU(128," J P Nagar Bengaluru-560078, Karnataka, India"),e.qZA(),e.TgZ(129,"p",45),e._uU(130,"Bengaluru, India"),e.qZA()()()(),e.YNc(131,I,2,0,"div",48)),2&o&&(e.xp6(53),e.Q6J("formGroup",n.angForm),e.xp6(8),e.Q6J("ngModel",n.first_name),e.xp6(1),e.Q6J("ngIf",n.submitted&&n.f.first_name.errors),e.xp6(5),e.Q6J("ngModel",n.last_name),e.xp6(1),e.Q6J("ngIf",n.submitted&&n.f.last_name.errors),e.xp6(9),e.Q6J("cssClass","custom")("preferredCountries",n.preferredCountries)("enableAutoCountrySelect",!1)("enablePlaceholder",!0)("searchCountryFlag",!0)("searchCountryField",e.WLB(26,F,n.SearchCountryField.Iso2,n.SearchCountryField.Name))("selectFirstCountry",!1)("selectedCountryISO",n.CountryISO.UnitedStates)("tooltipField",n.TooltipLabel.Name)("phoneValidation",!0)("separateDialCode",n.separateDialCode)("ngModel",n.phoneNumber),e.xp6(1),e.Q6J("ngIf",n.submitted&&n.f.phone.errors),e.xp6(8),e.Q6J("ngModel",n.email),e.xp6(1),e.Q6J("ngIf",n.submitted&&n.f.email.errors),e.xp6(8),e.Q6J("ngModel",n.company),e.xp6(1),e.Q6J("ngIf",n.submitted&&n.f.company.errors),e.xp6(6),e.Q6J("ngModel",n.description),e.xp6(1),e.Q6J("ngIf",n.submitted&&n.f.description.errors),e.xp6(1),e.Q6J("disabled",!1),e.xp6(27),e.Q6J("ngIf",n.success))},directives:[f.R,c.yS,r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,p.O5,u.FV],styles:[".header-section[_ngcontent-%COMP%]{background-image:url(contact-us.98f21489b06c3879.svg),url(product-header-bg-right.483fe3575da44d94.svg);background-size:inherit,contain;background-repeat:no-repeat,no-repeat;margin-top:54px;background-position:right bottom,left center;background-color:#fafafa}"]}),t})()}];let N=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.Bz.forChild(M)],c.Bz]}),t})();var S=s(4999),J=s(520);let w=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[p.ez,N,S.q,r.u5,r.UX,J.JF,u.J7]]}),t})()}}]);