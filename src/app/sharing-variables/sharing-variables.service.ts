import { Injectable } from '@angular/core';

import { Data } from '../interfaces/data';

@Injectable()
export class SharingVariablesService {
  data: Data = {};				//this is the shared variable
}
