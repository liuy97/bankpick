import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { StatisticEntry } from "../app/models/statistic-entry";

@Injectable({
  providedIn: "root",
})
export class StatisticService {
  private entriesStore = new BehaviorSubject<Array<StatisticEntry>>([
    {
      brand: "Apple Store",
      category: "Entertainment",
      amount: 5.99,
      incoming: false,
      font: "\uf179",
    },
    {
      brand: "Spotify",
      category: "Music",
      amount: 12.99,
      incoming: false,
      font: "\uf1bc",
    },
    {
      brand: "Money Transfer",
      category: "Transaction",
      amount: 300,
      incoming: true,
      font: "\uf179",
    },
    {
      brand: "Grocery",
      category: "Shopping",
      amount: 88,
      incoming: false,
      font: "\uf23d",
    },
    {
      brand: "Apple Store",
      category: "Entertainment",
      amount: 5.99,
      incoming: false,
      font: "\uf612",
    },
    {
      brand: "Money Transfer",
      category: "Transaction",
      amount: 300,
      incoming: true,
      font: "\uf179",
    },
    {
      brand: "Apple Store",
      category: "Entertainment",
      amount: 5.99,
      incoming: false,
      font: "\uf179",
    },
    {
      brand: "Spotify",
      category: "Music",
      amount: 12.99,
      incoming: false,
      font: "\uf1bc",
    },
    {
      brand: "Money Transfer",
      category: "Transaction",
      amount: 300,
      incoming: true,
      font: "\uf179",
    },
  ]);
  entries$ = this.entriesStore.asObservable();
}
