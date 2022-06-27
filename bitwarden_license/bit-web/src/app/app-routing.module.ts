import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "providers",
    loadChildren: async () => (await import("./providers/providers.module")).ProvidersModule,
  },
  {
    path: "sm",
    loadChildren: async () => (await import("./sm/sm.module")).SecretsManagerModule,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
