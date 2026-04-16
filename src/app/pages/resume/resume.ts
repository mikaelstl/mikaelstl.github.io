import { Component } from '@angular/core';
import { SectionTitle } from "../../components/base/section-title/section-title";
import { ResumeSection } from "../../components/resume-infos/resume-section/resume-section";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { solarCaseRoundDuotone, solarDiplomaDuotone, solarUserCheckDuotone } from '@ng-icons/solar-icons/duotone';

@Component({
  selector: 'resume',
  imports: [
    SectionTitle,
    ResumeSection,
    NgIcon
  ],
  providers: [
    provideIcons({
      solarDiplomaDuotone,
      solarCaseRoundDuotone,
      solarUserCheckDuotone
    })
  ],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {

  academic: any[] = [
    {
      title: 'Instituto Federal da Paraíba - Campus Cajazeiras',
      info: 'Cursando',
      description: 'Cursando Análise e Desenvolvimento de Sistemas, onde aprendi minhas principais habilidades técnicas, linguagens como Java, junto ao framework SpringBoot, TypeScript e alguns de suas bibliotecas, Sequelize, ReactJs, ReactNative, Prisma e Express. Além de desenvolver conhecimento sobre Padrões de Projeto e versionamento de código utilizando Git.'
    }
  ]

  professional: any[] = [
    {
      title: 'ChamaInovação',
      info: '07/2024 - 10/2024',
      description: 'Atuei como freelancer no desenvolvimento de uma aplicação para um  consultório oftalmológico, onde as principais atividades realizadas  foram, construção do visual para uma plataforma para agendamento médico, desde o design, até a implementação em código.'
    }
  ]

  skills: any[] = [
    {
      title: 'Java 21',
      info: 'SpringBoot',
      description: ''
    },
    {
      title: 'NodeJs',
      info: 'TypeScript | Angular | NestJs | ReactJs | Prisma | Sequelize',
      description: ''
    },
    {
      title: 'Dart',
      info: 'Flutter | ObjectBox',
      description: ''
    },
    {
      title: 'Bancos de Dados',
      info: 'PostgreSQL | MongoDB',
      description: ''
    }
  ]

}
