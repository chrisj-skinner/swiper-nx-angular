import { TestAppFeatureShellModule } from '@test/test-app/feature-shell';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent],
  imports: [TestAppFeatureShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
