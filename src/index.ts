/// <reference types="@types/google.maps" />
import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();
const cusomerMap = new CustomMap("map");

cusomerMap.addMarker(user);
cusomerMap.addMarker(company);
