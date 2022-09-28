import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  content =[
    {que:'What is Call Center Solution?', ans:'A call center solution can help you to cut the cost of your business. It is equipped with features like IVR solutions, call recording, toll-free number, phone proxy, voice mail, audio conferencing, and many more. All the hardware like cables, switchboards, and desk phones are replaced by software.'},

    {que:'What is an Inbound Call Center?', ans:'Inbound call centers manage incoming communication of an organization, in terms of calls, texts, emails, and live chat queries. A robust inbound contact center software is leveraged to handle the quantities of incoming calls and to facilitate easy routing of all calls to the right agent. The agent on-call can then easily answer all questions, thereby resolving queries quickly.'},

    {que:'What is an Outbound Call Center?', ans:'Outbound call centers manage outgoing communication of an organization, reaching/connecting to potential customers and buyers. SMBs, start-ups, and enterprises engage with outbound call center firms to reach out to a targeted list of consumers, through calls, SMS, and emails. Based on the key objectives of the outreach campaign, the right outbound contact center solutions can be leveraged to generate leads and grow sales or receive customer feedback.'},
    
    {que:'What are the features of Inbound and Outbound Call Centers?', ans:'Inbound call centers focus on agent availability and effective call routing with fast query resolution and brand building. They are designed to streamline the incoming call experience with key features like call whispering, barging, mobile apps, CRM integration, etc. On the contrary, outbound call centers enhance the reach to targeted audiences in a more efficient way. It helps in generating leads with its chief feature a ‘dialer’. The basic dialers of DeepCall are manual, automatic, and predictive dialers, which offer several advantages to organizations in terms of effectiveness.'}
  ]
}
