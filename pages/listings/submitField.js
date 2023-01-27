import { useState } from 'react'
import { useFormikContext } from 'formik'
import listingStyles from './listings.module.css'
import { Button } from '../../components/common/button'
import { API_ENDPOINTS } from '../../utils/api-endpoints'
import fetchJson from '../../lib/fetchJson'
import Spinner from '../../components/common/spinner'
import { toast } from 'react-toastify'

const SubmitField = ({ disabled }) => {
    const [status, setStatus] = useState('idle')
    const { values } = useFormikContext()
    const handleCreateList = async () => {
        setStatus('pending')
        try {
            const res = await fetchJson(API_ENDPOINTS.LISTING, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    values,
                }),
            })
            toast(res.message)
        } catch (err) {
            console.log(err)
            toast(err.message)
        } finally {
            setStatus('resolve')
        }
    }

    return (
        <div className={listingStyles.actionBtn}>
            <Button
                style={{
                    marginRight: '10px',
                    backgroundColor: 'transparent',
                    color: 'black',
                    border: '1px solid black',
                }}
                type="submit"
                onClick={handleCreateList}
                disabled={disabled}
            >
                {status === 'pending' ? <Spinner /> : 'create/publish'}
            </Button>
            <Button type="submit">Next</Button>
        </div>
    )
}

export default SubmitField
