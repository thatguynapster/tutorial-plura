// import { generateComponents } from "@uploadthing/react";
import { generateReactHelpers } from "@uploadthing/react/hooks";

// import { OurFileRouter } from "@/app/api/uploadthing/core";

// export const { UploadButton, UploadDropZone, Uploader } =
//   generateComponents<OurFileRouter>();

// export const { useUploadThing, uploadFiles } =
//   generateReactHelpers<OurFileRouter>();

import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();

export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();
