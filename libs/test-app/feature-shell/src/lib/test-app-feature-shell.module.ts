import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestAppShellComponent } from './test-app-shell/test-app-shell.component';
import { TestAppFeatureShellRoutingModule } from './test-app-feature-shell-router.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule, CommonModule, TestAppFeatureShellRoutingModule],
  declarations: [TestAppShellComponent],
  exports: [TestAppShellComponent],
})
export class TestAppFeatureShellModule {}
