import { useFormContext } from "react-hook-form";
import { BUSINESS_ENTITY_TYPES } from "../../config";

export function StepBusinessEntity() {
    const { register } = useFormContext();

    return (
        <>
            <h3 className="font-semibold text-gray-800">
                What’s your business entity type?
            </h3>
            <p className="text-gray-400 text-xs">This is the legal structure of your business, such as a sole proprietorship, corporation, LLC, or nonprofit.</p>

            <div className="space-y-3 mt-4">
                    <select className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md" {...register("businessEntity", { required: true })}>
                        {
                            BUSINESS_ENTITY_TYPES.map((type: any) => (
                                <option key={type} value={type.value}>{type.label}</option>
                            ))
                        }
                    </select>
            </div>
        </>
    );
}
