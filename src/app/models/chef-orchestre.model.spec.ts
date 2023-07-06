import { ChefOrchestre } from './chef-orchestre.model';

describe('ChefOrchestre', () => {
  it('should create an instance', () => {
    expect(new ChefOrchestre(0,"","",new Date(),"",0,"")).toBeTruthy();
  });
});
