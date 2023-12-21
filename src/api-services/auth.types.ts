
enum PrefixEnum {
    MR = "MR",
    MRS = "MRS",
    MISS = "MISS",
  }
  
  enum GenderEnum {
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHER = "OTHER",
    UNSPECIFIED = "UNSPECIFIED",
  }
  
  interface SignInProps {
    email: string;
    password: string;
  }
  
  interface SignUpProps {
    prefix: PrefixEnum.MR | PrefixEnum.MRS | PrefixEnum.MISS;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    gender:
      | GenderEnum.MALE
      | GenderEnum.FEMALE
      | GenderEnum.OTHER
      | GenderEnum.UNSPECIFIED;
    password: string;
    dateOfBirth: string;
    middleName?: string;
  }
  
export { PrefixEnum, GenderEnum };
    export type { SignInProps, SignUpProps };
  