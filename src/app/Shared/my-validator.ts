import { AbstractControl } from '@angular/forms';

export function ValidateAge(control: AbstractControl) {
  if (Number(control.value) < 0) {
    return { nonZero: true };
  } else {
    return null;
  }
}
