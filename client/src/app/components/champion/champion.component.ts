import { Component, OnInit } from '@angular/core';
import { ChampionService } from '../../services/champion.service';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { Champion } from '../../models/champion';

declare var M: any;


@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.css'],
  providers: [ChampionService]
})
export class ChampionComponent implements OnInit {

  constructor(private championService: ChampionService) {  }

  ngOnInit() {
    this.getChampions();
  }

  getChampions(){
    this.championService.indexChampions()
      .subscribe( res => {
        this.championService.champions = res as Champion[];
      })
  }

  addChampion(form?: NgForm) {
    if(form.value._id){
      this.championService.updateChampion(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getChampions();
          M.toast({html: 'Campeon actualizado!'});
        });
    } else {
      this.championService.storeChampion(form.value)
      .subscribe(res => {
        this.resetForm(form);
        this.getChampions();
        M.toast({html: 'Campeon agregado!'});
      });
    }
    
  }

  editChampion(champion: Champion){
    this.championService.selectedChampion = champion;
  }

  deleteChampion(_id: string){
    if (confirm('Estas seguro de eliminar esto?')) {
      this.championService.destroyChampion(_id)
      .subscribe(res => {
        this.getChampions();
        M.toast({html: 'Campeon eliminado!'});
      });
    }
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.championService.selectedChampion = new Champion();
    }
  }

}
