import { Dimmer, Loader, Segment } from "semantic-ui-react";

export default function Loading() {
    return (
        <div className="w-full h-full">
            <Dimmer active>
                <Loader size='big'>Loading...</Loader>
            </Dimmer>
        </div>
    )
}