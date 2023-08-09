import { GetServerSideProps, GetServerSidePropsContext } from "next";
import nookies from "nookies"
import { adminAuth } from "~/server/lib/firebaseAdmin"

export default function withServerAuth<PageProps extends Record<string, unknown>>
    (gssp: GetServerSideProps<PageProps>) {
    return async (context: GetServerSidePropsContext) => {
        try {
            const cookies = nookies.get(context)
            const token = await adminAuth.verifyIdToken(cookies.token!)
            const { uid, phone_number } = token

            return await gssp(context)
        } catch (error) {
            context.res.writeHead(302, { Location: "/auth/login" })
            context.res.end()
            return { props: {} as never }
        }
    }
}