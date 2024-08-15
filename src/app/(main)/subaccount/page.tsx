import UnAuthorized from "@/components/unauthorized";
import { getUserAuthDetails, verifyAndAcceptInvitation } from "@/lib/queries";
import { redirect } from "next/navigation";
import React from "react";

type Props = { searchParams: { state: string; code: string } };

const SubAccountMainPage = async ({ searchParams }: Props) => {
  const agencyId = await verifyAndAcceptInvitation();
  if (!agencyId) return <UnAuthorized />;

  const user = await getUserAuthDetails();
  if (!user) return;

  const getFirstSubAccountWithAccess = user.Permissions.find(
    (permission) => permission.access === true
  );

  if (searchParams.state) {
    const statePath = searchParams.state.split("___")[0];
    const stateSubAccountId = searchParams.state.split("___")[1];
    if (!stateSubAccountId) return <UnAuthorized />;

    return redirect(
      `/subaccount/${stateSubAccountId}?code=${searchParams.code}`
    );
  }

  if (getFirstSubAccountWithAccess)
    return redirect(`/subaccount/${getFirstSubAccountWithAccess.subAccountId}`);

  return <UnAuthorized />;
};

export default SubAccountMainPage;
