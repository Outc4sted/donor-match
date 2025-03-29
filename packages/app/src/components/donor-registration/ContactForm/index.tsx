// Import { useMemo, useState } from 'react'
// import { useForm } from 'react-hook-form'
// import * as z from 'zod'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { AlertCircle, Loader2, Mail } from 'lucide-react'
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Textarea } from '@/components/ui/textarea'

// interface Props {
//   readonly minCharCount: number
//   readonly maxCharCount: number
//   readonly formName: string
// }

// export default function ContactForm({
//   minCharCount = 10,
//   maxCharCount = 2000,
//   formName = 'mail-channels',
// }: Props) {
//   const [charCount, setCharCount] = useState(0)
//   const formSchema = useMemo(
//     () =>
//       z.object({
//         'static-form-name': z.literal(formName),
//         email: z.string().email({
//           message: 'Please provide a valid email',
//         }),
//         message: z
//           .string()
//           .min(minCharCount, {
//             message: `Your message must be at least ${minCharCount} characters`,
//           })
//           .max(maxCharCount, {
//             message: `Your message must be less than ${maxCharCount} characters`,
//           })
//           .refine((data) => data.trim() !== '', {
//             message: 'You must provide a message',
//           }),
//       }),
//     [minCharCount, maxCharCount, formName],
//   )
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       'static-form-name': formName,
//       email: '',
//       message: '',
//     },
//   })

//   async function onSubmit(formValues: z.infer<typeof formSchema>) {
//     const body = new FormData()
//     for (const [name, value] of Object.entries(formValues))
//       body.append(name, value)

//     try {
//       const response = await fetch(origin, {
//         method: 'POST',
//         body,
//       })

//       if (response.status !== 200 || (await response.text()) !== 'Email sent!')
//         throw new Error('Something went wrong')
//     } catch {
//       form.setError('root.serverError', { type: '512' })
//     }
//   }

//   return (
//     <div className="mx-auto w-1/2 min-w-[550px] rounded-lg border-4 border-green-700 bg-emerald-100 px-8 py-6">
//       {form.formState.isSubmitSuccessful ? (
//         <p className="text-center">Thank you! Your message is on the way.</p>
//       ) : (
//         <Form {...form}>
//           <form
//             aria-label={formName}
//             onSubmit={form.handleSubmit(onSubmit)}
//           >
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem className="mb-4">
//                   <FormLabel className="text-lg text-black">Email</FormLabel>

//                   <FormControl>
//                     <Input
//                       placeholder="How can I contact you?"
//                       disabled={form.formState.isSubmitting}
//                       {...field}
//                     />
//                   </FormControl>

//                   <div className="h-[20px]">
//                     <FormMessage className="font-normal" />
//                   </div>
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="message"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-lg text-black">Message</FormLabel>

//                   <FormControl>
//                     <Textarea
//                       className="bg-white"
//                       placeholder="What's on your mind?"
//                       maxLength={maxCharCount}
//                       disabled={form.formState.isSubmitting}
//                       onInput={({ target }) => {
//                         const charCount = (target as HTMLTextAreaElement).value
//                           .length
//                         setCharCount(charCount)
//                       }}
//                       {...field}
//                     />
//                   </FormControl>

//                   <div className="flex h-[20px]">
//                     <FormMessage className="shrink-0 font-normal" />
//                     <FormDescription className="w-full text-right">
//                       <span
//                         aria-hidden
//                         className="text-xs text-slate-700"
//                       >
//                         {charCount}/{maxCharCount}
//                       </span>
//                     </FormDescription>
//                   </div>
//                 </FormItem>
//               )}
//             />

//             <div
//               // eslint-disable-next-line tailwindcss/no-custom-classname
//               className="cf-turnstile"
//               data-sitekey="0x4AAAAAAAIRkMgJD2yTYQ6I"
//             />

//             <div className="flex h-16 flex-col justify-end gap-1">
//               {form.formState.errors.root?.serverError.type === '512' && (
//                 <div className="flex items-center justify-center gap-1 text-red-600">
//                   <AlertCircle className="size-4" />
//                   <span>
//                     There was an error sending your message. Please try again
//                     later.
//                   </span>
//                 </div>
//               )}

//               <Button
//                 type="submit"
//                 className="w-full"
//                 disabled={
//                   form.formState.isSubmitting ||
//                   !(
//                     form.formState.dirtyFields.email &&
//                     form.formState.dirtyFields.message
//                   )
//                 }
//               >
//                 {form.formState.isSubmitting ? (
//                   <span className="flex items-center gap-1 text-xl">
//                     <Loader2 className="h-full animate-spin" />
//                     Sending
//                   </span>
//                 ) : (
//                   <span className="flex items-center gap-1 text-xl">
//                     <Mail className="h-full" />
//                     Submit
//                   </span>
//                 )}
//               </Button>
//             </div>
//           </form>
//         </Form>
//       )}
//     </div>
//   )
// }
