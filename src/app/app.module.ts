import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CircuitGeneratorComponent } from './circuit-generator/circuit-generator.component';
import { FormsModule } from '@angular/forms';
import { ComposeComponent } from './compose/compose.component';
import { PreviewComponent } from './preview/preview.component';
import { RecipeService } from './recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    CircuitGeneratorComponent,
    ComposeComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
