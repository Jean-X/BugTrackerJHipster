import { NgModule } from '@angular/core';

import { MessengerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [MessengerSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [MessengerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MessengerSharedCommonModule {}
