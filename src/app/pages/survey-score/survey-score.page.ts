import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../../../services/language/language.service';
import {Events, NavController} from '@ionic/angular';
import {UserInterfaceService} from '../../../services/user-interface/user-interface.service';

@Component({
  selector: 'app-survey-score',
  templateUrl: './survey-score.page.html',
  styleUrls: ['./survey-score.page.scss'],
})
export class SurveyScorePage implements OnInit {

  scoreTitle = {
    french: 'Que signifie mon score?',
    english: 'What does my score mean?'
  };

  descriptions = {
    french: [
      {
        less50: 'Votre score de bien-être évalue comment vous vous sentez en ce moment dans votre vie, ce score est le fruit d\’une équation qui prend en compte votre humeur, votre niveau d\’énergie et votre niveau d\’engagement.<br> <br>'+
        'Il semble que votre niveau de satisfaction sur ces aspects là de votre vie soit plutôt faible en ce moment et que votre sentiment de bien-être est inférieur à la moyenne.<br><br>'+
        'Si vous trouvez que ce score correspond bien à ce que vous ressentez, sachez que l\'utilisation de nos services pourra vous aider à améliorer votre bien-être. En outre, nous vous recommandons fortement de prendre rendez-vous avec l\’un de nos coachs pour faire le point sur votre vie et vos émotions.<br><br>' +
        'Nous partageons votre score avec vous car nous espérons que cela vous aidera à voir que vous ne devez pas vivre avec un sentiment de bien-être inférieur à la moyenne.<br><br>'+
        'Un membre de notre équipe vous contactera pour en discuter. Si vous avez besoin d\'une aide urgente, nous vous recommandons de passer un appel vers un praticien recommandé qui pourra vous apporter le soutien psychologique dont vous avez besoin. <br><br> ',
        between5060: 'Votre score de bien-être évalue comment vous vous sentez en ce moment dans votre vie, ce score est le fruit d\’une équation qui prend en compte votre humeur, votre niveau d\’énergie et votre niveau d\’engagement. <br><br>'+
        'Il semble que votre niveau de satisfaction sur ces aspects là de votre vie soit plutôt correct en ce moment et que votre sentiment de bien-être est situé dans la moyenne de la population. La plupart des personnes qui comme vous sont situées dans cette moyenne vont plutôt bien en général mais peuvent aussi traverser des moments difficiles.<br><br>'+
        'Si vous trouvez que ce score correspond bien à ce que vous ressentez, sachez que l\'utilisation de nos services pendant quelques semaines pourra vous aider à améliorer votre bien-être. N\’hésitez pas à prendre rendez-vous avec l\’un de nos coachs pour en discuter.<br><br>',
  
        between6080: 'Votre score de bien-être évalue comment vous vous sentez en ce moment dans votre vie, ce score est le fruit d\’une équation qui prend en compte votre humeur, votre niveau d\’énergie et votre niveau d\’engagement. <br><br>'+
        'Il semble que votre niveau de satisfaction sur ces aspects là de votre vie soit plutôt bon en ce moment et que vous avez un sentiment de bien-être situé au dessus de la moyenne de la population. La plupart des personnes qui comme vous se situent au dessus de la moyenne évaluent positivement leurs vies et indiquent qu\’elles se sentent bien, si ce n\’est pas votre cas, pas d\’inquiétude, vous êtes au bon endroit pour accéder à des outils et conseils qui vous aideront à vous connecter avec votre propre version du bien-être.<br><br>'+
        'Si vous trouvez que ce score correspond bien à ce que vous ressentez, sachez que l\'utilisation de nos services pendant quelques semaines pourra vous aider à améliorer votre score de bien-être. Un rendez-vous avec l\’un de nos coachs pourra vous éclairer sur les différents moyens dont vous disposez.',
             
        more80: 'Votre score de bien-être évalue comment vous vous sentez en ce moment dans votre vie, ce score est le fruit d\’une équation qui prend en compte votre humeur, votre niveau d\’énergie et votre niveau d\’engagement. <br><br>'+
        'Vous faites partie des 20% de la population ayant le score de bien-être le plus élevé. La plupart des personnes qui comme vous se situent dans cette tranche la plus haute évaluent leurs vies très positivement et indiquent très bien se sentir.<br><br>'+
        'Maintenant votre score n\’indique peut-être pas totalement votre état d\’esprit du moment et votre expérience personnelle est peut-être différente.<br><br>'+
        'Sachez en tout cas que l\'utilisation de nos services pendant quelques semaines pourra vous aider à mieux vous connaitre pour enrichir votre expérience de vie.'
      },
      {
        less30: 'Vous semblez plutôt serein, peu stressé. Il semble que vous savez gérer votre stress, vous adapter et trouver des solutions. <br><br>'+
        'Toutefois, attention à ne pas sous-estimer l\’importance de gérer vos émotions sur le long terme. Nos micro-learnings et notre boîte à outils pourront être de puissants alliés pour vous accompagner.<br><br>'+
        'N\’hésitez pas aussi à reprendre ce test dans 15 jours pour réévaluer votre niveau de stress.',

        between3070: 'Vous semblez relativement stressé en ce moment. Vous savez probablement faire face au stress en général, mais il existe peut-être un certain nombre de situations que vous n\’arrivez pas à gérer.<br><br>'+
        'Vous ressentez peut-être aussi un sentiment d\’impuissance qui vous anime en ce moment et génère pour vous des perturbations émotionnelles. Si c\’est le cas, sachez que vous pouvez vous sortir de ce sentiment d\’impuissance en consultant l\’un de nos coachs ou en apprenant quelques méthodes de gestion du stress.<br><br>'+
        'Une piste à explorer : un travail sur votre respiration et sur vos schémas de pensées. <br><br>'+
        'N\’hésitez pas aussi à reprendre ce test dans 15 jours pour réévaluer votre niveau de stress',
        
        more70: 'Vous semblez plutôt tendu et stressé. Vous avez peut-être le sentiment de subir beaucoup en ce moment et pensez ne pas pouvoir trouver de solutions.<br><br>'+
        'Vous ressentez peut-être aussi un sentiment d\’impuissance vis-à-vis de votre vie actuelle. Si votre niveau de stress reste élevé dans le temps, vous risquez un état d\’épuisement et des problèmes de santé dont les plus fréquents sont les maladies cardio-vasculaires, …<br><br>'+
        'Il est urgent d\’approfondir votre bilan, en prenant rendez-vous avec l\’un de nos coachs et d\'apprendre à gérer votre stress.<br><br>'+
        'Une piste à explorer : un travail sur votre respiration, sur vos schémas de pensées ainsi qu\’une modification de votre manière de réagir. <br><br>'+
        'N\’hésitez pas aussi à reprendre ce test dans les 10 prochains jours pour réévaluer votre niveau de stress.'
        
      },
      {
        less30: 'Vous semblez plutôt serein, peu stressé. Il semble que vous savez gérer votre stress, vous adapter et trouver des solutions. <br><br>'+
        'Toutefois, attention à ne pas sous-estimer l\’importance de gérer vos émotions sur le long terme. Nos micro-learnings et notre boîte à outils pourront être de puissants alliés pour vous accompagner.<br><br>'+
        'N\’hésitez pas aussi à reprendre ce test dans 15 jours pour réévaluer votre niveau de stress.',

        between3070: 'Vous semblez relativement stressé en ce moment. Vous savez probablement faire face au stress en général, mais il existe peut-être un certain nombre de situations que vous n\’arrivez pas à gérer.<br><br>'+
        'Vous ressentez peut-être aussi un sentiment d\’impuissance qui vous anime en ce moment et génère pour vous des perturbations émotionnelles. Si c\’est le cas, sachez que vous pouvez vous sortir de ce sentiment d\’impuissance en consultant l\’un de nos coachs ou en apprenant quelques méthodes de gestion du stress.<br><br>'+
        'Une piste à explorer : un travail sur votre respiration et sur vos schémas de pensées. <br><br>'+
        'N\’hésitez pas aussi à reprendre ce test dans 15 jours pour réévaluer votre niveau de stress',
        
        more70: 'Vous semblez plutôt tendu et stressé. Vous avez peut-être le sentiment de subir beaucoup en ce moment et pensez ne pas pouvoir trouver de solutions.<br><br>'+
        'Vous ressentez peut-être aussi un sentiment d\’impuissance vis-à-vis de votre vie actuelle. Si votre niveau de stress reste élevé dans le temps, vous risquez un état d\’épuisement et des problèmes de santé dont les plus fréquents sont les maladies cardio-vasculaires, …<br><br>'+
        'Il est urgent d\’approfondir votre bilan, en prenant rendez-vous avec l\’un de nos coachs et d\'apprendre à gérer votre stress.<br><br>'+
        'Une piste à explorer : un travail sur votre respiration, sur vos schémas de pensées ainsi qu\’une modification de votre manière de réagir. <br><br>'+
        'N\’hésitez pas aussi à reprendre ce test dans les 10 prochains jours pour réévaluer votre niveau de stress.'
        
      }
    ],
    english: [
      {
        less50: 'Your wellbeing score assesses how you feel right now in your life, this score is the result of an algorithm that takes into account your mood, your energy level and your level of commitment.<br><br>' +
            'It seems that your level of satisfaction on these aspects of your life is rather weak at the moment and that you have a feeling of well-being below average.<br>' +
            'We’re sharing it because we hope that it helps you to see that you don’t have to live with below average wellbeing.<br><br>' +
            'If this score corresponds to what you feel, please know that we’re sorry to hear that things are probably a bit tough for you right now and that using rabat24 program can help you improve your wellbeing score.<br><br>' +
            'In addition, we strongly recommend that you make an appointment with one of our coaches to take stock of your life and your emotions. A member of our team will also contact you to discuss.<br><br>' +
            'If you need urgent help, we recommend that you make a call to a recommended practitioner who can give you the psychological support you need.',
        between5060: 'Your wellbeing score assesses how you feel right now in your life, this score is the result of an algorithm that takes into account your mood, your energy level and your level of commitment.<br><br>' +
            'It seems that your level of satisfaction on these aspects of your life is rather average at the moment. Most people in this range say that they are doing OK but they also have hard moments as well.<br><br>' +
            'If you find that this score corresponds to what you feel, please know that using our program for a few weeks can help you improve your wellbeing. Do not hesitate to make an appointment with our coaches to discuss.',
        between6080: 'Your wellbeing score assesses how you feel right now in your life, this score is the result of an algorithm that takes into account your mood, your energy level and your level of commitment.<br><br>' +
            'It seems that your level of satisfaction on these aspects of your life is above the average range. Most people in this range positively evaluate their lives and indicate that they feel good.<br>' +
            'If this is not your case, do not worry, you are in the right place to access tools and tips that will help you connect with your own version of wellbeing. An appointment with one of our coaches can enlighten you on the different ways you have.',
        more80: 'Your wellbeing score assesses how you feel right now in your life, this score is the result of an algorithm that takes into account your mood, your energy level and your level of commitment.<br><br>' +
            'Congratulations! You are among the 20% of the population with the highest wellbeing scores. Most people in this range rate their lives very positively.<br><br>' +
            'Your score is relative to others so your personal experience might be different.<br>' +
            'Using rabat24 program can help you improve your life experience.'
      },
      {
        less30: 'You results suggest minimal or no symptoms of anxiety!<br><br>' +
        'It seems that you can manage your stress, adapt and find solutions. However, be careful not to underestimate the importance of managing your emotions in the long run. Our Micro Learnings and tools can be powerful allies to accompany you.<br><br>' +
        'Do not hesitate to take this test again in a month to re-evaluate your stress level.',
        between3070: 'You seem relatively stressed right now. You probably know how to deal with stress in general, but there may be a number of situations you can not manage.<br><br>' +
            'Your results suggest that you may be experiencing some symptoms of mild anxiety and some feelings of helplessness that could generate emotional disturbances. While your symptoms are likely not having a major impact on your life, it is important to monitor them. To do so, you could consult one of our trained professionals or learn some methods of stress management.<br><br>' +
            'A path to explore: work on your breathing and your thinking patterns.<br>' +
            'Do not hesitate to take this test again in 15 days to reassess your stress level.',
        more70: 'You seem rather tense and stressed. You may feel that you are undergoing a\n' +
           ' lot at the moment and not able to find solutions.<br><br>' +
           'You may also feel helpless about your current life. If your stress levels remain high over time, you may be experiencing symptoms of mild anxiety and health problems, the most common being heart diseases …<br>' +
           'It would likely be beneficial for you to consult one of our trained professionals in order to learn how to manage your stress levels.<br><br>' +
           'A path to explore: work on your breathing, your thinking patterns and a shift in the way you react.<br>' +
           'Feel free to repeat this test in the next days to reassess your stress level.'
      },
      {
        less30: 'You results suggest minimal or no symptoms of anxiety!<br><br>' +
        'It seems that you can manage your stress, adapt and find solutions. However, be careful not to underestimate the importance of managing your emotions in the long run. Our Micro Learnings and tools can be powerful allies to accompany you.<br><br>' +
        'Do not hesitate to take this test again in a month to re-evaluate your stress level.',
        between3070: 'You seem relatively stressed right now. You probably know how to deal with stress in general, but there may be a number of situations you can not manage.<br><br>' +
            'Your results suggest that you may be experiencing some symptoms of mild anxiety and some feelings of helplessness that could generate emotional disturbances. While your symptoms are likely not having a major impact on your life, it is important to monitor them. To do so, you could consult one of our trained professionals or learn some methods of stress management.<br><br>' +
            'A path to explore: work on your breathing and your thinking patterns.<br>' +
            'Do not hesitate to take this test again in 15 days to reassess your stress level.',
        more70: 'You seem rather tense and stressed. You may feel that you are undergoing a\n' +
           ' lot at the moment and not able to find solutions.<br><br>' +
           'You may also feel helpless about your current life. If your stress levels remain high over time, you may be experiencing symptoms of mild anxiety and health problems, the most common being heart diseases …<br>' +
           'It would likely be beneficial for you to consult one of our trained professionals in order to learn how to manage your stress levels.<br><br>' +
           'A path to explore: work on your breathing, your thinking patterns and a shift in the way you react.<br>' +
           'Feel free to repeat this test in the next days to reassess your stress level.'
      }
    ]
  };

  title = 'wellbeingScore';
  percent: number;
  description: string;

  constructor(
      private events: Events,
      private navController: NavController,
      private language: LanguageService,
      private ui: UserInterfaceService
  ) { }

  ngOnInit() {
    const type = Number(localStorage.getItem('surveyType'));
    console.log('Type: ' + type);
    this.percent = Number(localStorage.getItem('surveyPercent'));
    if (type === 0) {
      if (this.percent <= 50) {
        this.description = this.descriptions[this.language.getCurrentLanguage()][type].less50;
      } else if (this.percent > 50 && this.percent < 60) {
        this.description = this.descriptions[this.language.getCurrentLanguage()][type].between5060;
      } else if (this.percent >= 60 && this.percent < 80) {
        this.description = this.descriptions[this.language.getCurrentLanguage()][type].between6080;
      } else if (this.percent >= 80) {
        this.description = this.descriptions[this.language.getCurrentLanguage()][type].more80;
      }
    } else {
      this.title = 'stressScore';
      if (this.percent <= 30) {
        this.description = this.descriptions[this.language.getCurrentLanguage()][type].less30;
      } else if (this.percent > 30 && this.percent < 70) {
        this.description = this.descriptions[this.language.getCurrentLanguage()][type].between3070;
      } else if (this.percent >= 70) {
        this.description = this.descriptions[this.language.getCurrentLanguage()][type].more70;
      }
    }
  }

  navigateToSurveys() {
    this.ui.showHeaderTopBar();
    this.events.publish('navigate-forward-url', 'surveys');
  }

}
